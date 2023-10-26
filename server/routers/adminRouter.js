const router = require('express').Router();
const adminController = require('../controllers/adminController');
const requireUser = require('../middlewares/requireUser');

router.get('/', requireUser, adminController.getUserOwnedHotels);

module.exports = router;