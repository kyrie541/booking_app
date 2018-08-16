var mongoose = require("mongoose");
var Pricing = require("./models/pricing");

var data = [
    {
        location: "SABS",
        offPeak_badminton: 5,
        normal_badminton: 6.5,
        peak_badminton: 10.5,
        superPeak_badminton: 11.5,
        weekend_rate_badminton: 9,
        
        offPeak_futsal: 15,
        normal_futsal: 25,
        peak_futsal: 40,
        superPeak_futsal: 50
    },
    {
        location: "SAMC",
        offPeak_badminton: 5,
        normal_badminton: 7.5,
        peak_badminton: 11.5,
        superPeak_badminton: 14,
        weekend_rate_badminton: 10
    }
];

function add_pricing(){
    Pricing.remove({}, function(err){
        if(err){
            console.log(err);
        }
    });
    data.forEach(function(seed){
        Pricing.create(seed, function(err, booking){
            if(err){
                console.log(err);
            }else{
                console.log("added a pricing");
            }
        });
    });
}

module.exports = add_pricing;






