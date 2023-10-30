
const express = require('express');
const router = express.Router();
const Hotel = require('../models/Hotel');
const { success, error } = require('../utils/responseWrapper');
const requireUser = require('../middlewares/requireUser');

router.post('/:hotelId/reviews', requireUser, async (req, res) => {
  try {
    const { hotelId } = req.params;
    const { text, rating } = req.body;

    const hotel = await Hotel.findById(hotelId);

    if (!hotel) {
      return res.status(404).json(error('Hotel not found'));
    }

    const newReview = {
      user: req._id,
      text,
      rating,
    };

    hotel.reviews.push(newReview);

    const totalRating = hotel.reviews.reduce((sum, review) => sum + review.rating, 0);
    hotel.rating = totalRating / hotel.reviews.length;

    await hotel.save();

    res.status(201).json(success('Review added successfully', newReview));
  } catch (err) {
    res.status(500).json(error('Failed to add a review', err));
  }
});

router.post('/:hotelId/comments', requireUser, async (req, res) => {
  try {
    const { hotelId } = req.params;
    const { text } = req.body;

    const hotel = await Hotel.findById(hotelId);

    if (!hotel) {
      return res.status(404).json(error('Hotel not found'));
    }

    const newComment = {
      user: req._id,
      text,
    };

    hotel.comments.push(newComment);

    await hotel.save();

    res.status(201).json(success('Comment added successfully', newComment));
  } catch (err) {
    res.status(500).json(error('Failed to add a comment', err));
  }
});

module.exports = router;
