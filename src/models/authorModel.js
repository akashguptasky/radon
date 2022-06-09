const mongoose = require('mongoose');

const newAuthor1 = new mongoose.Schema( {

    authorName: String,
    age:Number,
    address:String,
    rating:Number

}, { timestamps: true });

module.exports = mongoose.model('NewAuthor', newAuthor1)


