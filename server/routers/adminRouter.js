const router = require('express').Router();
const adminController = require('../controllers/adminController');
const requireUser = require('../middlewares/requireUser');

router.get('/users', requireUser, adminController.getUserOwnedHotels);

module.exports = router;