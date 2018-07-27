var mongoose = require("mongoose");

var bookingSchema = new mongoose.Schema({
   type: {type: String, required: true},
   date: {type: String, required: true},
   startTime: {type: String, required: true},
   endTime: {type: String, required: true},
   name: {type: String, required: true},
   phNumber: {type: String, required: true},
   price: {type: Number, required: true},
   status: {type: Number, required: true},
   courtNum: {type: String, required: true}
});

module.exports = mongoose.model("Booking", bookingSchema);