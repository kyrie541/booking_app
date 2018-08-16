var mongoose = require("mongoose");

var pricingSchema = new mongoose.Schema({
    location: {type: String, required: true},
    offPeak_badminton: {type: Number},
    normal_badminton: {type: Number},
    peak_badminton: {type: Number},
    superPeak_badminton: {type: Number},
    weekend_rate_badminton: {type: Number},
    
    offPeak_futsal: {type: Number},
    normal_futsal: {type: Number},
    peak_futsal: {type: Number},
    superPeak_futsal: {type: Number}

});

module.exports = mongoose.model("Pricing", pricingSchema);
