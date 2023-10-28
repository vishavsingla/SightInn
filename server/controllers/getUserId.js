const jwt = require("jsonwebtoken");

module.exports = (req, res) => {
  const { token } = req.body;

  if (token) {
    try {
      const decode = jwt.verify(token, process.env.ACCESS_TOKEN_PRIVATE_KEY);

      res.json({
        auth: true,
        data: decode,
      });

    } catch (error) {
      res.json({
        auth: false,
        data: error.message,
      });
    }
  } else {
    res.json({
      auth: false,
      data: "No Token Found in request",
    });
  }
};
