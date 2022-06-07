const { response } = require('express');
const bookModel = require('../controllers/bookController')
const authorModel = require('../models/authorModel')

const createAuthor = async function(req,res)
{
   const data= req.body
   let newData= await authorModel.create(data);
   res.send({msg:newData})

   
}
module.exports.createAuthor = createAuthor;