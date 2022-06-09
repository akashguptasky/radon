const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel=require('../models/publisherModel')

const createBook= async function (req, res) {
    let book = req.body
  if(book.author==undefined || book.publisher==undefined)
  {
    res.send("please Povide to author_id,and pubisher id ,this detail is required ")
  }
  else 
  {
    let mydata= await authorModel.find({_id:book.author});
    let mydata2= await publisherModel.find({_id:book.publisher})
    if(mydata.length==0 )
    {
        res.send("please provide a valid Author Id")
    }
    else if(mydata2.length==0)
    {
        res.send("please provide a valid publisher Id")
    }
    else
    {
        let createdData=bookModel.create(book)
        res.send({data:createdData})
    }
   
  } 
}


const getBooks = async function(req,res)
{
    let data = await bookModel.find().populate('author').populate('publisher')//['author','publisher']
    res.send(data);
}



const isHardCover1 = async function(req,res)
{   
    let myBook=req.params.id   
    let check= await bookModel.find({name:{$eq:myBook}}).select({publisher:1,_id:0}).populate('publisher')
    // console.log(check[0].publisher.name);
   let myName= check[0].publisher.name;
   if(myName=="Penguin" || myName=="HarperCollins")
   {
       let data = await bookModel.updateMany({name:{$eq:myBook}},{$set:{isHardCover:true}})
        res.send("Record Updated");
   }
   else
   {
       res.send("Not Updated");
   }
    

// other approach by ID
    // if(myId=="62a1d7dfbfaad29fbb6cdd23" || myId=="62a1d81dbfaad29fbb6cdd29")
    // {
    //     let data = await bookModel.updateMany({publisher:{$eq:myId}},{$set:{isHardCover:true}})
    //     res.send({UpdatedDta:data});
    // }
    // else
    // {
    //     res.send("No Records available for particual condtion")
    // }   

}



const increaseRating = async function(req,res)
{   
   let book=req.params.bookName;
   
    
    let data = await bookModel.updateMany({$and:[{name:{$eq:book}},{ratings:{$gt:3.5}}]},{$set:{$inc:{price:10}}})
    res.send({msg:data})


}







// Complete ....................
//  Create at least 4 publishers (Penguin, Bloomsbury, Saraswati House, HarperCollins). Create at least 6 authors with ratings 2, 3, 3.5, 4, 4.5 and 5. Create around 10 books with these publishers and authors.





module.exports.createBook= createBook;
module.exports.getBooks=getBooks;
module.exports.isHardCover1=isHardCover1;
module.exports.increaseRating=increaseRating;
// module.exports.getBooksData= getBooksData
// module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
