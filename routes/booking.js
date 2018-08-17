var express = require("express");
var router  = express.Router();
var Booking   = require("../models/booking");
var middleware = require("../middleware");

//INDEX page (show all, table view )
router.get("/", middleware.isLoggedIn, function(req,res){
    Booking.find({date:getTodayDate()}, function(err, allBooking){
       if(err){
           console.log(err);
       } else {
          res.render("bookings/index",{bookings:allBooking});
       }
    });
});

//NEW - show form to create new booking
router.get("/new", middleware.isLoggedIn, function(req, res){
   res.render("bookings/new"); 
});

//CREATE - add new campground to DB
router.post("/", middleware.isLoggedIn, function(req, res){

    // get data from form and add to database
    var location = req.user.location;
    var type = req.body.type;
    var courtNum = req.body.courtNum;
    var startTime = req.body.startTime;
    var endTime = req.body.endTime;
    var name = req.body.name;
    var phNumber = req.body.phNumber;
    var status = req.body.status;
    var price = req.body.price;
    var date = req.body.date;
    var deposit = req.body.deposit;
    var newBooking = {price: price, type: type, courtNum: courtNum, date: date, startTime: startTime, endTime: endTime, name: name, phNumber: phNumber, status: status, location: location, deposit: deposit};
    // Create a new booking and save to DB
    Booking.create(newBooking, function(err, newlyCreated){
        if(err){
            console.log(err);
            res.send("All info is required, please go back and try again.");
        } else {
            //redirect back to booking page
            res.redirect("/bookings");
        }
    });
});

// SHOW - shows more info about one booking
router.get("/:id", middleware.isLoggedIn, function(req, res){
    //find the booking with provided ID
    Booking.findById(req.params.id, function(err, foundBooking){
        if(err){
            console.log(err);
        } else {
            //render show template with that booking
            res.render("bookings/show", {booking: foundBooking});
        }
    });
});

// EDIT booking ROUTE
router.get("/:id/edit", middleware.isLoggedIn,  function(req, res){
    Booking.findById(req.params.id, function(err, foundBooking){
        if(err){
            console.log(err);
        } else {
            res.render("bookings/edit", {booking: foundBooking});
        }
    });
});

// UPDATE booking ROUTE
router.put("/:id", middleware.isLoggedIn, function(req, res){
    // find and update the correct booking
    Booking.findByIdAndUpdate(req.params.id, req.body.booking, function(err, updatedBooking){
       if(err){
           res.redirect("/bookings");
       } else {
           //redirect somewhere(show page)
           res.redirect("/bookings/" + req.params.id);
       }
    });
});

// DESTROY CAMPGROUND ROUTE
router.delete("/:id", middleware.isLoggedIn, function(req, res){
   Booking.findByIdAndRemove(req.params.id, function(err){
      if(err){
          res.redirect("/bookings");
      } else {
          res.redirect("/bookings");
      }
   });
});

function getTodayDate(){
  var today = new Date();
  var day= today.getDate();
  var month= today.getMonth()+1;
  day = checkDate(day);
  month = checkDate(month);
  
  var year= today.getFullYear();
  var fullDate = day + "-" + month + "-" + year;
  return fullDate;
}
  
function checkDate(i) {
    if (i < 10) {i = "0" + i}  // add zero in front of numbers < 10
    return i;
}

module.exports = router;

