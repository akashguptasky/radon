const jwt = require('jsonwebtoken')
const auth = function (req, res, next) {
    // let token= req.headers["x-Auth-token"]
    // if(!token) token = req.headers["x-auth-token"]
    // if(!token) return 
    if (!(req.headers["x-Auth-token"] || req.headers["x-auth-token"])) {
        res.send({ status: false, msg: "token must be present" })
    }
    else {
        next()
    }
}


const auth2 = function (req, res, next) {
    let token = req.headers["x-auth-token"]
    let decodedToken = jwt.verify(token, "functionup-radon");

    if (!decodedToken) {
        res.send({ status: false, msg: "token is invalid" });
    }
    else {
        next()
    }
}

const userModified = function(req,res,next)
{
    let token = req.headers["x-auth-token"]
    let decodedToken = jwt.verify(token, "functionup-radon");
    let userToBeModified = req.params.userId;
    let userLoggedIn= decodedToken.userId
    if(userToBeModified!=userLoggedIn) return res.send({status:false,msg:"user logedin is not allowed to modify  the request"})
    next()

}

// module.exports.auth = auth;
// module.exports.auth2 = auth2;
module.exports = {
    auth,auth2,userModified
}