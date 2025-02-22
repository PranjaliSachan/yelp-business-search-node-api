const config = require('../../config');
const apiCallStats = require('../stats');

exports.getMapBoxToken = async (req, res) => {
    apiCallStats
        .updateStats({
            service_name: apiCallStats.SERVICE_TYPE.INTEGRATIONS.MAPBOX,
            client_ip: req.ip
        })
        .then(_ => res.status(200).json({ token: config.MAPBOX.PKEY }))
        .catch(_ => res.sendStatus(500));
}