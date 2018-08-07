var express = require("express");
var router  = express.Router();
var Booking   = require("../models/booking");
var middleware = require("../middleware");

//History Route
router.get("/", middleware.isLoggedIn, function(req,res){
    Booking.find({}, function(err, allBooking){
       if(err){
           console.log(err);
       } else {
          res.render("historys",{bookings:allBooking});
       }
    });
});

//View One day Only History
router.get("/:date", middleware.isLoggedIn, function(req,res){
    var date = req.params.date;
    console.log(date); 
    Booking.find({date:date}, function(err, allBooking){
       if(err){
           console.log(err);
       } else {
          res.render("historys/show",{bookings:allBooking});
       }
    });
});

module.exports = router;

