const ApiCall = require('../domain/models/ApiCall');
const client = require('../domain/connection');

exports.SERVICE_TYPE = {
    INTEGRATIONS: {
        YELP: 'yelp',
        LOCATIONIQ: 'locationiq',
        MAPBOX: 'mapbox',
    },
    API: 'api'
}

exports.getStats = async (req, res) => {
    const { serviceName } = req.query;
    const { data, error } = await client()
        .from('apicall_stats')
        .select()
        .eq('service_name', this.SERVICE_TYPE.INTEGRATIONS[serviceName]);
    
    if (error) {
        console.error('An error occurred while getting api call stats', error);
        res.status(500).json(error);
    } else {
        res.status(200).json(data);
    }
}

exports.updateStats = async (_ = { serviceName, clientIp }) => {
    const apiCall = new ApiCall(_);
    const { error } = await client()
        .from('apicall_stats')
        .insert(apiCall);

    if (error) {
        console.error('An error occurred while inserting api call stat', error);
        return false;
    } else {
        return true;
    }
}