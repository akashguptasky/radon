
const userController= require('../controllers/userController')
const mid1= function ( req, res, next) {
  
   let value= req.headers.isfreeappuser
   if(value!=undefined)
     next()
    else
    {
        res.send("missing a mandatory header")
    }
}


module.exports.mid1= mid1
 

