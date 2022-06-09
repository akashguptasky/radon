const bookModel = require('../models/bookModel');
const publisherModel=require('../models/publisherModel')

const createPublisher = async function(req,res)
{
    let data=req.body;
    // console.log(bookModel.author)
    let myCreatedData= await publisherModel.create(data);
    res.send({data:myCreatedData});
}
module.exports.createPublisher = createPublisher;