const jwt = require('jsonwebtoken')
const auth = function (req, res, next) {
    if (!(req.headers["x-Auth-token"] || req.headers["x-auth-token"])) {
        res.status(500).send({ status: false, msg: "token must be present" })
    }
    else {
        next()
    }
}

const auth2 = function (req, res, next) {
    let token = req.headers["x-auth-token"]
    try {
        let decodedToken = jwt.verify(token, "functionup-radon");
        next()
    }
    catch (err) {
        res.status(500).send({msg:"Token verification is failed"})
    }

}

const userModified = function (req, res, next) {

    let token = req.headers["x-auth-token"]
    let decodedToken = jwt.verify(token, "functionup-radon");
    let userToBeModified = req.params.userId;
    let userLoggedIn = decodedToken.userId
    if (userToBeModified != userLoggedIn) return res.send({ status: false, msg: "user logedin is not allowed to modify  the request" })
    next()
}

module.exports = {
    auth, auth2, userModified
}