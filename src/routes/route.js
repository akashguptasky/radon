const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')

const router = express.Router();



// first movies api 
router.get('/movies', function (req, res) {
   let moviesArr=['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins'];
   //seperate
    res.send(moviesArr.join(","));
    console.log(...moviesArr)
});

// second find movies by using index 
router.get('/movies/:indexNumber',function(req,res){
let moviesArr=['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins'];
let index=req.params.indexNumber;
if(index<=moviesArr.length-1)
{
    res.send( moviesArr[index]);
}
// handle problem 
else
{
    res.send("sorry Availalbe movies index only 0 to 3. so plz select only valid number");
}

});

// create films api here 
router.get('/films',function(req,res){
  const myObjFilmArr=  [ {
        'id': 1,
        'name': 'The Shining'
       }, {
        'id': 2,
        'name': 'Incendies'
       }, {
        'id': 3,
        'name': 'Rang de Basanti'
       }, {
        'id': 4,
        'name': 'Finding Nemo'
       }]

       res.send(myObjFilmArr);
});



router.get('/films/:filmId',function(req,res){
    const myObjFilmArr=  [ {
        'id': 1,
        'name': 'The Shining'
       }, {
        'id': 2,
        'name': 'Incendies'
       }, {
        'id': 3,
        'name': 'Rang de Basanti'
       }, {
        'id': 4,
        'name': 'Finding Nemo'
       }]
       let index=req.params.filmId;
       if(index>myObjFilmArr.length)
       {
        res.send("No movie exists with this id")
       }
       else
       { 
      for(let i=0;i<myObjFilmArr.length;i++)
      {
          if(myObjFilmArr[i].id==index)
          {
           res.send("Film Name is: "+myObjFilmArr[i].name +"  and Objec is : "+JSON.stringify(myObjFilmArr[i]));
            
          }
      }
    }

});


module.exports = router;
// adding this comment for no reason