const config = require('./config');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(cors());

const productsRoute = require('./controllers/productController');
const integrationsRoute = require('./controllers/integrationsController');
const apiHealthController = require('./controllers/apiHealthController');

app.use('/api/v1/products', productsRoute);
app.use('/api/v1/integrations', integrationsRoute);
app.use('/api/v1/health', apiHealthController);

app.listen(config.PORT, function () {
    console.log('Ecommerce API listening on PORT ', config.PORT);
});