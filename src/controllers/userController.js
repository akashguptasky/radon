const UserModel= require("../models/userModel")

const createUSer = async function(req,res)
{
        let data=req.body
        let val=req.headers.isfreeappuser
        console.log(data)
        data.isFreeAppUser=val
        console.log(data)
        let createdData=  await UserModel.create(data);
        res.send({mess:createdData})
}

module.exports.createUSer=createUSer