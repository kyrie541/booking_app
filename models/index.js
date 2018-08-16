var mongoose = require('mongoose');
mongoose.set('debug', true);
var url = process.env.DATABASEURL || "mongodb://localhost/sport_arena";
mongoose.connect(url);

mongoose.Promise= Promise;

module.exports.Booking = require("./booking");
module.exports.Pricing = require("./pricing");