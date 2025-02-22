const config = require('./config');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(cors());

const integrationsRoute = require('./controllers/integrationsController');

app.use('/api/v1/integrations', integrationsRoute);

app.listen(config.PORT, function () {
    console.log('Ecommerce API listening on PORT ', config.PORT);
});