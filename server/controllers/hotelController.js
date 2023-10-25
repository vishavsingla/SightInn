    const { error, success } = require("../utils/responseWrapper");
    const Hotel = require("../models/Hotel");
    const User = require("../models/User");

    const createHotel = async (req, res) => {

        const { title, location, description, pricePerNight, capacity, amenities, images } = req.body;
        const owner = req._id;
        const user = await User.findById(req._id);
        const imageUrls = images.split(',').map(url => url.trim());

        const hotel = await Hotel.create({
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
            return res.send(success(201, hotel));
        } catch (err) {
            return res.send(error(500, err.message));
        }
    }

    const getAllHotels = async (req, res) => {
        try {
            const hotels = await Hotel.find();
            res.status(200).json(success(hotels));
        } catch (err) {
            res.status(500).json(error(err));
        }
    }


    const getHotelById = async (req, res) => {
        const { id } = req.params;
        try {
            const hotel = await Hotel.findById(id);
            if (!hotel) {
                return res.status(404).json(error("Hotel not found"));
            }
            res.status(200).json(success(hotel));
        } catch (err) {
            res.status(400).json(error(err));
        }
    }

    const updateHotel = async (req, res) => {
        const { id } = req.params;
        const updateData = req.body;

        try {
            const hotel = await Hotel.findByIdAndUpdate(id, updateData, { new: true });
            if (!hotel) {
                return res.status(404).json(error("Hotel not found"));
            }
            res.status(200).json(success(hotel));
        } catch (err) {
            res.status(400).json(error(err));
        }
    }

    const deleteHotel = async (req, res) => {
        const { id } = req.params;

        try {
            const hotel = await Hotel.findByIdAndDelete(id);
            if (!hotel) {
                return res.status(404).json(error("Hotel not found"));
            }
            res.status(200).json(success("Hotel deleted successfully"));
        } catch (err) {
            res.status(400).json(error(err));
        }
    }



    module.exports = {
        createHotel,
        deleteHotel,
        updateHotel,
        getHotelById,
        getAllHotels
    }