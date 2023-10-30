const router = require('express').Router();
const Booking = require('../models/Booking');
const Hotel = require('../models/Hotel');
const { success, error } = require('../utils/responseWrapper');
const requireUser = require('../middlewares/requireUser');

router.post('/:hotelId', requireUser, async (req, res) => {
  try {
    const user = req._id;

    const { hotelId } = req.params;

    const hotel = await Hotel.findById(hotelId);

    if (!hotel) {
      return res.status(404).json(error('Hotel not found'));
    }

    const { checkInDate, checkOutDate, specialRequests, numberOfGuests } = req.body;

    const totalPrice = calculateTotalPrice(checkInDate, checkOutDate, hotel.pricePerNight);

    const newBooking = new Booking({
      user,
      hotel: hotelId,
      checkInDate,
      checkOutDate,
      totalPrice,
      specialRequests,
      numberOfGuests,
    });

    await newBooking.save();

    res.status(201).json(success('Booking created successfully', newBooking));
  } catch (error) {
    res.status(500).json(error('Failed to create a booking', error));
  }
});


function calculateTotalPrice(checkInDate, checkOutDate, pricePerNight) {
    const oneDay = 24 * 60 * 60 * 1000;
    const startDate = new Date(checkInDate);
    const endDate = new Date(checkOutDate);
    const numberOfNights = Math.round(Math.abs((startDate - endDate) / oneDay));
    const totalPrice = numberOfNights * pricePerNight;
    return totalPrice;
  }


  router.delete('/:bookingId', requireUser, async (req, res) => {
    try {
      const { bookingId } = req.params;

      const booking = await Booking.findById(bookingId);
  
      if (!booking) {
        return res.status(404).json(error('Booking not found'));
      }
      if (booking.user.toString() !== req._id) {
        return res.status(403).json(error('You are not authorized to delete this booking'));
      }
  
      await Booking.findByIdAndDelete(bookingId);
  
      res.status(200).json(success('Booking deleted successfully'));
    } catch (err) {
      res.status(500).json(error('Failed to delete the booking', err));
    }
  });
  
  
  
module.exports = router;
