require('dotenv').config();

exports.POSTGRES_CONNECTION_STRING = process.env.POSTGRES_CONNECTION_STRING;
exports.PORT = process.env.PORT;
exports.YELP = {
    API: process.env.YELP_API,
    KEY: process.env.YELP_APIKEY
};
exports.MAPBOX = {
    PKEY: process.env.MAPBOX_PKEY,
    SKEY: process.env.MAPBOX_SKEY
};
exports.LOCATIONIQ = process.env.LOCATIONIQ_API;