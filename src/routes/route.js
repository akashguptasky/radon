const express = require('express');
const externalModule = require('../logger/logger')
const helper=require('../../src/util/helper')
const formatter=require('../../src/validator/formatter')

const router = express.Router();

router.get('/test-me', function (req, res) {
    externalModule.welcome()
    helper.cDay();
    helper.cMonth();
    helper.getBatchInfo();
    formatter.trim();
    formatter.changeToLowerFunction();
    formatter.changeToUpperFunction();
    
    res.send('My first ever api!')
});

module.exports = router;
// adding this comment for no reason