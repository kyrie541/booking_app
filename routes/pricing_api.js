var express = require('express');
var router = express.Router();
var helper = require("../helpers/pricings");

router.route('/')
    .get(helper.getPricings)
    .post(helper.createPricing);

router.route('/:PricingId')
    .get(helper.getPricing)
    .put(helper.updatePricing)
    .delete(helper.deletePricing);
    
router.route('/location/:location')
    .get(helper.getPricingsByLocation);
    


module.exports = router;