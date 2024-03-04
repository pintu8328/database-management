const express = require('express');
const router = express.Router();
const tableController = require('../controllers/tableControllers');

router.post('/createTable', tableController.createTable);

module.exports = router;
