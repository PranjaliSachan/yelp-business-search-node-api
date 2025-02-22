const config = require('../../config');
const fetch = require('../../utils/fetch');
const apiStats = require('../stats');

exports.reverseGeocode = async (req, res) => {
    const url = config.LOCATIONIQ + `&lat=${req.query.lat}&lon=${req.query.lon}`;
    const options = {
        method: 'GET'
    }

    fetch.apiCall(url, options)
        .then(data => res.status(200).json(data))
        .catch(_ => res.sendStatus(500))
        .finally(_ => apiStats.updateStats({
            serviceName: apiStats.SERVICE_TYPE.INTEGRATIONS.LOCATIONIQ,
            clientIp: req.ip
        }));
}