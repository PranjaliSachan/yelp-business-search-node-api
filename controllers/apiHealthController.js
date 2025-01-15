const express = require('express');
const router = express.Router();
const command = require('../utils/apiCallsStats');

router.route('/apicalls')
    .get(command.getStats);

module.exports = router;