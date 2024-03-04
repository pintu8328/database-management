

const express = require('express');
const router = express.Router();
const tableController = require('../controllers/table');

router.post('/:tableName/insert', tableController.insertData);
router.delete('/:tableName/:id',tableController.deleteData)

module.exports = router;
