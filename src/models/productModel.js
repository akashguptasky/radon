const mongoose = require('mongoose');

const product = new mongoose.Schema({

    name:String,
    category:String,
    price:
    {
        type:Number,
        required:true
    }


})
module.exports= mongoose.model('product',product)

// - Your product document should look like this
// ```
// {
// 	_id: ObjectId("61951bfa4d9fe0d34da86344"),
// 	name:"Catcher in the Rye",
// 	category:"book",
// 	price:70 //mandatory property
// }