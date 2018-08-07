var express = require("express");
var router  = express.Router();
var Booking   = require("../models/booking");
var middleware = require("../middleware");


//Card View Route
router.get("/badmintoncard", middleware.isLoggedIn, function(req,res){
    Booking.find({date:getTodayDate()}, function(err, allBooking){
       if(err){
           console.log(err);
       } else {
          res.render("cards/card",{bookings:allBooking});
       }
    });
});

router.get("/futsalcard", middleware.isLoggedIn, function(req,res){
    Booking.find({date:getTodayDate()}, function(err, allBooking){
       if(err){
           console.log(err);
       } else {
          res.render("cards/card2",{bookings:allBooking});
       }
    });
});

function getTodayDate(){
    var today = new Date();
    var day= today.getDate();
    var month= today.getMonth()+1;
    var year= today.getFullYear();
    var fullDate = day + "-" + month + "-" + year;
    return fullDate;
}

module.exports = router;



