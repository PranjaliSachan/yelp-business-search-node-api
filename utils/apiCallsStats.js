const { v4: UUID } = require('uuid');
const ApiCallStat = require('../domain/models/ApiCallStat');

exports.SERVICE_TYPE = {
    INTEGRATIONS: {
        YELP: 'yelp',
        LOCATIONIQ: 'locationiq',
        MAPBOX: 'mapbox',
    },
    API: 'api'
}

exports.getStats = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.status(200).json(products);
    } catch (error) {
        console.error('An error occurred while getting api call stats', error);
        res.status(500).json(error);
    }
}

exports.updateStats = async (_ = { service_name, client_ip }) => {
    try {
        _['id'] = UUID();
        _['timestamp'] = new Date().toUTCString();
        console.log(_);
        // const newStat = new ApiCallStat(_);
        await ApiCallStat.create(_);
        return true;
    } catch (error) {
        console.error('An error occurred while inserting api call stat', error);
        return false;
    }
}