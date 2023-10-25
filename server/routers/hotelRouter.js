const router = require('express').Router();
const hotelController = require('../controllers/hotelController');
const requireUser = require('../middlewares/requireUser');

router.post('/', requireUser, hotelController.createHotel);
router.get('/', hotelController.getAllHotels);
router.get('/:id', requireUser, hotelController.getHotelById);
router.put('/:id', requireUser, hotelController.updateHotel);
router.delete('/:id', requireUser, hotelController.deleteHotel);

module.exports = router;
