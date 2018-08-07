var express = require('express');
var router = express.Router();
var helper = require("../helpers/bookings");

router.route('/')
    .get(helper.getBookings)
    .post(helper.createBooking);

router.route('/:bookingId')
    .get(helper.getBooking)
    .put(helper.updateBooking)
    .delete(helper.deleteBooking);
    
router.route('/date/:dateId')
    .get(helper.getBookingsByDate);



module.exports = router;