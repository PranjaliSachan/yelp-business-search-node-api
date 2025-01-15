const Product = require('../models/Product');
const apiStat = require('../../utils/apiCallsStats');

exports.searchProduct = async (req, res) => {
    try {
        const products = await Product.findAll();
        await apiStat.updateStats({ service_name: apiStat.SERVICE_TYPE.API, client_ip: req.ip });
        res.status(200).json(products);
    } catch (error) {
        console.error('An error occurred while getting all products', error);
        res.status(500).json(error);
    }
}