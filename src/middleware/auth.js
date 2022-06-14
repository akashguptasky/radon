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
module.exports.auth = auth;
module.exports.auth2 = auth2;