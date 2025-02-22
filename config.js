require('dotenv').config();

exports.PORT = process.env.PORT;
exports.YELP = {
    API: process.env.YELP_API,
    KEY: process.env.YELP_APIKEY
};
exports.LOCATIONIQ = process.env.LOCATIONIQ_API;
exports.SUPABASE = {
    URL: process.env.SUPABASE_URL,
    KEY: process.env.SUPABASE_KEY
}
exports.MAPBOX = {
    PKEY: process.env.MAPBOX_PKEY,
    SKEY: process.env.MAPBOX_SKEY
};