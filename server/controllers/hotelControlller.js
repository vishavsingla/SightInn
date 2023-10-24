const { error, success } = require("../utils/responseWrapper");
const Hotel = require("../models/Hotel");
const Account = require("../models/Account");

const createHotel = async (req, res) => {

    const { title, location, description, pricePerNight, capacity, amenities, images } = req.body;
    const { _id: owner } = req.user;
    const hotel = new Hotel({
        owner,
        title,
        location,
        description,
        pricePerNight,
        capacity,
        amenities,
        images,
    });
    try {
        await hotel.save();
        res.status(201).json(success(hotel));
    } catch (err) {
        res.status(400).json(error(err));
    }
}

module.exports = {
    createHotel,
}