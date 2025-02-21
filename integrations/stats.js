const { v4: UUID } = require('uuid');
const ApiCall = require('../domain/models/ApiCall');

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
        const { serviceName } = req.params;
        const stats = await ApiCall.findAll({
            where: {
                service_name: this.SERVICE_TYPE.INTEGRATIONS[serviceName],
            },
        });
        res.status(200).json(stats);
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
        await ApiCall.create(_);
        return true;
    } catch (error) {
        console.error('An error occurred while inserting api call stat', error);
        return false;
    }
}