const router = require('express').Router();
const hotelController = require('../controllers/hotelController');
const requireAdmin = require('../middlewares/requireAdmin');

router.post('/', requireAdmin, hotelController.createHotel);
router.get('/', hotelController.getHotels);
router.get('/:id', hotelController.getHotel);
router.put('/:id', requireAdmin, hotelController.updateHotel);
router.delete('/:id', requireAdmin, hotelController.deleteHotel);

