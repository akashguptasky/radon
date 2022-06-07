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
    let myd = await bookModel.find({author_id:value1}).select("name")
    console.log(Object.values(myd))
    res.send(myd)
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
    let data = await (await bookModel.find({price:{$gte:50 , $lte:100}}).select({ author_id :1, name:1,_id:0}));
    let data2= await authorModel.find().select({author_name:1,author_id:1,_id:0})

   
    for(let i=0;i<data.length;i++)
    {
     for(let j=0;j<data2.length;j++)
     {
        if(data[i].author_id===data2[j].author_id)
        {
            myarr.push(data2[j].author_name,data[i].name); 
            break;
        }

     }
        
    }
    console.log(myarr)

    // res.send({msg:data});
    res.send({mes:myarr})

}


module.exports.createBook = createBook;
module.exports.getList = getList;
module.exports.getUpdatedData = getUpdatedData;
module.exports.getByCostBooks=getByCostBooks;



