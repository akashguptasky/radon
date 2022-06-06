const { json } = require("body-parser")
const { count } = require("console")
const { mongo } = require("mongoose")
const BookModel= require("../models/bookModel")


//First API Code here
const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

//Second API Code Here
const bookList = async function(req,res)
{
   let allBooks= await BookModel.find().select({ bookName: 1, authorName: 1, _id: 0})
   res.send({msg: allBooks})   
}

//Third API Code Here
const getBooksInYear = async function(req,res)
{
   let year= req.body.year;
    let yearbooks;
    let mydata = await BookModel.find({year:[year]})
  
  res.send({msg: mydata})  

}

//Fourth API Code here // incomplete

const getParticularBooks = async function(req,res)
{
    // let my=req.body
    // let k=Object.keys(my);
    // let kq=Object.values(my)
    // console.log(k);
    // console.log(k.length)
    // console.log(kq)

    let getData = req.body;
    let k=Object.keys(getData);
   
    let value1=Object.values(getData)


   
    // console.log(k)
    // console.log(getData)
    let data= await BookModel.find(k);

    res.send(data);
    
    

}









//request to return all books who have an Indian price tag of “100INR” or “200INR” or “500INR”
//Five API Code
const getXINRBooks= async function(req,res)
{
 
    let inrbooks= await BookModel.find({$or:[{price:{indianPirce:'100INR'}},{price:{indianPrice:"200INR"}},{price:{indianPrice:'500INR'}}]})
 
    console.log("hello")
    console.log(inrbooks)
    res.send({msg:inrbooks})
}


// returns books that are available in stock or have more than 500 pages
//sixth API code here 
const getRandomBooks = async function(req,res)
{
    let randomBooks = await BookModel.find({stock:true, 'totalPages':500})
    res.send({mes:randomBooks});
}

module.exports.createBook = createBook;
module.exports.bookList = bookList;
module.exports.getBooksInYear = getBooksInYear;
module.exports.getXINRBooks = getXINRBooks;
module.exports.getRandomBooks = getRandomBooks;
module.exports.getParticularBooks = getParticularBooks;