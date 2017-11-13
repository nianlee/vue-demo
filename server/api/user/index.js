'use strict'

const express = require('express');
const router = express.Router();

const info = require('./info');
const login = require('./login');

router.get('/user/info', info);
router.post('/user/login', login);

module.exports = router;
