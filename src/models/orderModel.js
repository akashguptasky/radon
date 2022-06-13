const mongoose = require('mongoose')
const productModel = require('./productModel')
const userModel = require('./userModel')

const order = new mongoose.Schema({
    userId:String,
    productId:String,
    ammount:
    {
        type:Number

    },
    isFreeAppUser:
    {
        type:Boolean

    },
    date:
    {
        type:String
    }


})
module.exports = mongoose.model('order',order)
// Your Order document looks like this.
// ```
// {
// 	_id: ObjectId("61951bfa4d9fe0d34da86344"),
// 	userId: “61951bfa4d9fe0d34da86829”,
// 	productId: “61951bfa4d9fe0d34da86344”
// 	amount: 0,
// 	isFreeAppUser: true, 
// 	date: “22/11/2021”
// }