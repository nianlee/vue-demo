'use strict'

const express = require('express');
const router = express.Router();

const project = require('./project');
const user = require('./user');

router.use('/api', project);
router.use('/api', user);

module.exports = router;
