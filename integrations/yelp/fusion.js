const config = require('../../config');
const fetch = require('../../utils/fetch');
const apiStats = require('../stats');

const yelpApiCallHeaders = {
    'Authorization': `Bearer ${config.YELP.KEY}`,
    'accept': 'application/json'
};

exports.categories = async (req, res) => {
    const url = config.YELP.API + '/categories?locale=en_US';
    const options = {
        method: 'GET',
        headers: yelpApiCallHeaders
    }

    fetch.apiCall(url, options)
        .then(data => res.status(200).json(data))
        .catch(_ => res.sendStatus(500))
        .finally(_ => apiStats.updateStats({
            serviceName: apiStats.SERVICE_TYPE.INTEGRATIONS.YELP,
            clientIp: req.ip
        }));
}

exports.searchBusinesses = async (req, res) => {
    const queryParams = req.query;
    var url = new URL(config.YELP.API + '/businesses/search');

    for (var queryParam in queryParams) {
        url.searchParams.append(queryParam, queryParams[queryParam]);
    }

    const options = {
        method: 'GET',
        headers: yelpApiCallHeaders
    }

    fetch.apiCall(url.href, options)
        .then(data => res.status(200).json(data))
        .catch(_ => res.sendStatus(500))
        .finally(_ => apiStats.updateStats({
            serviceName: apiStats.SERVICE_TYPE.INTEGRATIONS.YELP,
            clientIp: req.ip
        }));
}

exports.businessDetails = async (req, res) => {
    const url = config.YELP.API + `/businesses/${req.params.id}?locale=en_US`
    const options = {
        method: 'GET',
        headers: yelpApiCallHeaders
    }

    fetch.apiCall(url, options)
        .then(data => res.status(200).json(data))
        .catch(_ => res.sendStatus(500))
        .finally(_ => apiStats.updateStats({
            serviceName: apiStats.SERVICE_TYPE.INTEGRATIONS.YELP,
            clientIp: req.ip
        }));
}

exports.businessReviews = async (req, res) => {
    const url = new URL(config.YELP.API + `/businesses/${id}/reviews`);
    const queryParams = req.query;
    const options = {
        method: 'GET',
        headers: yelpApiCallHeaders
    }

    for (var queryParam in queryParams) {
        url.searchParams.append(queryParam, queryParams[queryParam]);
    }

    fetch.apiCall(url.href, options)
        .then(data => res.status(200).json(data))
        .catch(_ => res.sendStatus(500))
        .finally(_ => apiStats.updateStats({
            serviceName: apiStats.SERVICE_TYPE.INTEGRATIONS.YELP,
            clientIp: req.ip
        }));
}