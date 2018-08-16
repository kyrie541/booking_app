var db = require('../models');

exports.getPricings = function(req,res){
    db.Pricing.find()
     .then(function(pricings){
         res.json(pricings);
     })
     .catch(function(err){
         res.send(err);
     });
};

exports.createPricing= function(req,res){
    db.Pricing.create(req.body)
    .then(function(newPricing){
        res.status(201).json(newPricing);
    })
    .catch(function(err){
        res.send(err);
    });
};

exports.getPricing= function(req, res){
    db.Pricing.findById(req.params.pricingId)
    .then(function(foundPricing){
        res.json(foundPricing);
    })
    .catch(function(err){
        res.send(err);
    });
};

exports.updatePricing= function(req, res){
    db.Pricing.findOneAndUpdate({_id: req.params.pricingId}, req.body, {new: true})
    .then(function(pricing){
        res.json(pricing);
    })
    .catch(function(err){
        res.send(err);
    });
};

exports.deletePricing =  function(req, res){
    db.Pricing.remove({_id: req.params.pricingId})
    .then(function(){
        res.json({message: 'We deleted it!'});
    })
    .catch(function(err){
        res.send(err);
    });
};

exports.getPricingsByLocation = function(req,res){
    var location = req.params.location;
    db.Pricing.find({location:location})
     .then(function(pricings){
         res.json(pricings);
     })
     .catch(function(err){
         res.send(err);
     });
};



module.exports = exports;