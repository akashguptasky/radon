const express = require('express');
const underscore = require('underscore')
const router = express.Router();

let players =
[

    {
        "name":"Cristiano Ronaldo",
        "dob":"1/2/1985",
        "gender":"Male",
        "city":"Funchal",
        "sports":["Football"]
    },

    {
        "name":"Lionel Messi",
        "dob":"24/6/1987",
        "gender":"Male",
        "city":"Argentina",
        "sports":["Footwbll"]
    },

    {
        "name":"Virat Kohli",
        "dob":"5/11/1988",
        "gender":"Male",
        "city":"Delhi",
        "sports":["Cricket"]
    }

]

router.post('/players',function(req,res){

   
    let obj={
        "name":req.body.name,
        "dob":req.body.dob,
        "gender":req.body.gender,
        "city":req.body.city,
        "sports":req.body.sports
        
    }
    let b='false';
   for(let i=0;i<players.length;i++)
   {
       if(players[i].name==req.body.name)
       {
        b='true';
        break;
       }
   }
    if(b=='false')
    {
        players.push(obj);
    }
   
    res.send(players);
});

module.exports = router;
// adding this comment for no reason