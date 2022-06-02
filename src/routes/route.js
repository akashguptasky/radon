const express = require('express');
const externalModule = require('../logger/logger')
const helper=require('../../src/util/helper')
const formatter=require('../../src/validator/formatter')
const lodash=require('lodash');

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
router.get('/hello', function(req,res){
   
    let mymontharry=lodash.chunk(['january','febuary','March','Aprail','May','June','July','August','september','October','November','December'],3)
    console.log(mymontharry);
    res.send('my hello')

});



module.exports = router;
// adding this comment for no reason