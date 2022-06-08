const { count } = require("console");
const bookModel = require("../models/bookModel");
const authorModel = require('../models/authorModel');
const { json } = require("body-parser");


const createBook = async function(req,res)
{
   const data= req.body;
   let newData= await bookModel.create(data);
   res.send({msg:newData})  
}


const getList = async function(req,res)
{
    let newData= await authorModel.findOne({author_name:"Chetan Bhagat"}).select({author_id:1,_id:0})// getting author_id here
    let value1=newData.author_id;
    // let myd = await bookModel.find({author_id:value1}).select({name:1,_id:0 })
    let myd = await bookModel.find({author_id:value1}).select({name:1,_id:0})
    res.send({msg:myd})
}

const getUpdatedData = async function(req,res)
{
    let updat= await bookModel.findOneAndUpdate({name:"Two states"},{$set:{price:100}},{new:true});
    
    let name= await authorModel.findOne({author_id:updat.author_id}).select({author_name:1,_id:0}) //author_name because it's not available in book
    let resPrice=updat.price;
    res.send({msg:name,resPrice})
}

const getByCostBooks = async function(req,res)
{
    let myarr=[];
    let data = await bookModel.find({price:{$gte:50 , $lte:100}}).select({ author_id :1, name:1,_id:0});
    // console.log(data)
    let data2= await authorModel.find().select({author_name:1,author_id:1,_id:0})
    // console.log(data2)

   
    for(let i=0;i<data.length;i++)
    {
     for(let j=0;j<data2.length;j++) 
     {
        if(data[i].author_id === data2[j].author_id)
        {
            myarr.push(data2[j].author_name,data[i].name); 
            break;
        }
     }
        
    }
    // res.send({msg:data});
    res.send({mes:myarr})

}

// *************** NEw Problem Solution  ===> problem 1 

// Write an api GET /books-by-authorid/<Author_Id> (for example /books/1 or /books/2 etc) that returns all the books written by the author with an id <Author_Id>. Only return the names of these books


const authoridBooks = async function(req,res)
{   let id=req.params.id;
    let allAuthoridBooks= await bookModel.find({author_id:id})
    res.send({msg:allAuthoridBooks})
}

//  ===> problem 2
// Find a list of authors whose are older than 50 years of age with at least one book that has a rating greater than 4. Only include the author’s names and their ages in the response for this api
 
const oldAuthorBooks = async function(req,res)
{
    let oldAuthorId = await authorModel.find({age:50}).select({author_id:1,author_name:1,age:1,_id:0}) //here i getting  all author_id whoes age is grether than 
    let allBooksHighRating = await bookModel.find({rating:{$gt:4}},{author_id:oldAuthorId.author_id}).select({author_id:1,_id:0})
    res.send({msg:allBooksHighRating})
}




module.exports.createBook = createBook;
module.exports.getList = getList;
module.exports.getUpdatedData = getUpdatedData;
module.exports.getByCostBooks=getByCostBooks;
module.exports.authoridBooks=authoridBooks;
module.exports.oldAuthorBooks=oldAuthorBooks;



