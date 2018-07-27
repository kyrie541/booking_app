var express = require("express");  
var app = express();
var bodyParser  = require("body-parser");
var mongoose  = require("mongoose");
var Booking   = require("./models/booking");
var methodOverride = require("method-override");

mongoose.connect("mongodb://localhost/sport_arena");
app.set("view engine", "ejs");  
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));

//landing page
app.get("/",function(req,res){
    res.render("index");  
});

//INDEX page (show all)
app.get("/booking",function(req,res){
    Booking.find({date:getTodayDate()}, function(err, allBooking){
       if(err){
           console.log(err);
       } else {
          res.render("booking",{bookings:allBooking});
       }
    });
});

app.get("/booking2",function(req,res){
        Booking.find({date:getTodayDate()}, function(err, allBooking){
       if(err){
           console.log(err);
       } else {
          res.render("booking2",{bookings:allBooking});
       }
    });  
});

//NEW - show form to create new booking
app.get("/booking/new", function(req, res){
   res.render("new.ejs"); 
});

//CREATE - add new campground to DB
app.post("/booking", function(req, res){

    // get data from form and add to database
    var type = req.body.type;
    var courtNum = req.body.courtNum;
    var startTime = req.body.startTime;
    var endTime = req.body.endTime;
    var name = req.body.name;
    var phNumber = req.body.phNumber;
    var status = req.body.status;
    var price = req.body.price;
    var newBooking = {price: price, type: type, courtNum: courtNum, date: getTodayDate(), startTime: startTime, endTime: endTime, name: name, phNumber: phNumber, status: status};
    // Create a new booking and save to DB
    Booking.create(newBooking, function(err, newlyCreated){
        if(err){
            console.log(err);
            res.send("All info is required, please go back and try again.");
        } else {
            //redirect back to booking page
            res.redirect("/booking");
        }
    });
});

// SHOW - shows more info about one booking
app.get("/booking/:id", function(req, res){
    //find the booking with provided ID
    Booking.findById(req.params.id, function(err, foundBooking){
        if(err){
            console.log(err);
        } else {
            //render show template with that booking
            res.render("show", {booking: foundBooking});
        }
    });
});

// EDIT booking ROUTE
app.get("/booking/:id/edit",  function(req, res){
    Booking.findById(req.params.id, function(err, foundBooking){
        if(err){
            console.log(err);
        } else {
            res.render("edit", {booking: foundBooking});
        }
    });
});

// UPDATE booking ROUTE
app.put("/booking/:id", function(req, res){
    // find and update the correct booking
    Booking.findByIdAndUpdate(req.params.id, req.body.booking, function(err, updatedBooking){
       if(err){
           res.redirect("/booking");
       } else {
           //redirect somewhere(show page)
           res.redirect("/booking/" + req.params.id);
       }
    });
});

// DESTROY CAMPGROUND ROUTE
app.delete("/booking/:id", function(req, res){
   Booking.findByIdAndRemove(req.params.id, function(err){
      if(err){
          res.redirect("/booking");
      } else {
          res.redirect("/card");
      }
   });
});

//History Route
app.get("/history", function(req,res){
    Booking.find({}, function(err, allBooking){
       if(err){
           console.log(err);
       } else {
          res.render("history",{bookings:allBooking});
       }
    });
});

//View One day Only History
app.get("/history/:date", function(req,res){
    var date = req.params.date;
    Booking.find({date:date}, function(err, allBooking){
       if(err){
           console.log(err);
       } else {
          res.render("history_show",{bookings:allBooking});
       }
    });
});

//Card View Route
app.get("/card", function(req,res){
    var today = new Date();
    var day= today.getDate();
    var month= today.getMonth()+1;
    var year= today.getFullYear();
    var fullDate = day + "-" + month + "-" + year;
    Booking.find({date:fullDate}, function(err, allBooking){
       if(err){
           console.log(err);
       } else {
          res.render("card",{bookings:allBooking});
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


app.listen(process.env.PORT, process.env.IP,function(){   
    console.log("Sport Arena Booking has started!");
});
