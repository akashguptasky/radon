const { response } = require('express');

const about= function(req,res)
{
   res.send("Hello This is About Page ");
}

const login= function(req,res)
{
   res.send("Hello This is Login Page ");
}

const viewYourProducts= function(req,res)
{
   res.send("Hello This is Products Page ");
}

module.exports.about=about;
module.exports.login=login;
module.exports.viewYourProducts=viewYourProducts;