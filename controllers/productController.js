const express = require('express');
const router = express.Router();
const command = require('../domain/commands/searchProductCommand');

router.route('/')
    .get(command.searchProduct);

module.exports = router;