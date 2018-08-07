var db = require('../models');

exports.getBookings = function(req,res){
    db.Booking.find()
     .then(function(bookings){
         res.json(bookings);
     })
     .catch(function(err){
         res.send(err);
     });
};

exports.createBooking= function(req,res){
    db.Booking.create(req.body)
    .then(function(newBooking){
        res.status(201).json(newBooking);
    })
    .catch(function(err){
        res.send(err);
    });
};

exports.getBooking= function(req, res){
    db.Booking.findById(req.params.bookingId)
    .then(function(foundBooking){
        res.json(foundBooking);
    })
    .catch(function(err){
        res.send(err);
    });
};

exports.updateBooking= function(req, res){
    db.Booking.findOneAndUpdate({_id: req.params.bookingId}, req.body, {new: true})
    .then(function(booking){
        res.json(booking);
    })
    .catch(function(err){
        res.send(err);
    });
};

exports.deleteBooking =  function(req, res){
    db.Booking.remove({_id: req.params.bookingId})
    .then(function(){
        res.json({message: 'We deleted it!'});
    })
    .catch(function(err){
        res.send(err);
    });
};


module.exports = exports;