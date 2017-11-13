'use strict'

const express = require('express');
const router = express.Router();

const info = require('./info');
const list = require('./list');

router.get('/project/info', info);
router.get('/project/list', list);

module.exports = router;
