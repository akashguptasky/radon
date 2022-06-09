const mongoose = require('mongoose');

const newPulisher =new mongoose.Schema({
    name:
    {
        type:String
    } ,
   
    headQuarter:
    {
        type:String
      
    }
},{timestamps:true});

module.exports = mongoose.model('NewPublisher',newPulisher);

