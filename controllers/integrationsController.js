const express = require('express');
const router = express.Router();
const yelp = require('../integrations/yelp/fusion');
const locationiq = require('../integrations/location-iq/reverseGeoCoding');
const mapbox = require('../integrations/mapbox/mapbox');
const stats = require('../integrations/stats');

router.route('/yelp/businesses')
    .get(yelp.searchBusinesses);

router.route('/yelp/businesses/:id')
    .get(yelp.businessDetails);

router.route('/yelp/businesses/:id/reviews')
    .get(yelp.businessReviews);

router.route('/yelp/categories')
    .get(yelp.categories);

router.route('/locationiq/reverse')
    .get(locationiq.reverseGeocode);

router.route('/mapbox/key')
    .get(mapbox.getMapBoxToken);

router.route('/stats')
    .get(stats.getStats);

module.exports = router;