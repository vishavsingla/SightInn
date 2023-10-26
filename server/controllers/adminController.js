const Hotel = require('../models/Hotel'); 

const getUserOwnedHotels = async (req, res) => {
    try {
        const ownedHotels = await Hotel.find({ owner: req._id });
        res.status(200).json(ownedHotels);
      } catch (error) {
        console.error('An error occurred while fetching user-owned hotels:', error);
        res.status(500).json({ error: 'Failed to fetch user-owned hotels' });
      }
};

module.exports = {getUserOwnedHotels};
