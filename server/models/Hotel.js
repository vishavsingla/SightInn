const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account',
    required: true,
  },
  image: {
    publicId: String,
    url: String,
  },
  title: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  pricePerNight: {
    type: Number,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  amenities: [String],
  images: [String],
  rating: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
      text: String,
      rating: Number,
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  availability: [
    {
      startDate: {
        type: Date,
        required: true,
      },
      endDate: {
        type: Date,
        required: true,
      },
      pricePerNight: {
        type: Number,
        required: true,
      },
    },
  ],
});

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;
