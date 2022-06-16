const { response } = require("express");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

//try catch 

const createUser = async function (abcd, xyz) {
  try{
  let data = abcd.body;
  let arr=Object.keys(data);
  if(arr.length!=0)
  {
    let savedData = await userModel.create(data);
    console.log(abcd.newAtribute);
    xyz.status(201).send({ msg: savedData });
  }
  else{
    xyz.send("You are trying to insert empty data")
  }

  }
  catch(err)
  {
    xyz.status(500).send(err.message)
  }
};

const loginUser = async function (req, res) {

  let userName = req.body.emailId;
  let password = req.body.password;
try{
  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is not corerct",
    });

  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "radon",
      organisation: "FunctionUp",
    },
    "functionup-radon"
  );
  res.setHeader("x-auth-token", token);
  res.send({ status: true, token: token });
}catch(err)
{
  res.status(500).send(err.message)
}
};

const getUserData = async function (req, res) {

  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });

  res.send({ status: true, data: userDetails });
};

const updateUser = async function (req, res) {


  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  if (!user) {
    return res.send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
  res.send({ status: true, data: updatedUser });

};

const deleteUser = async function (req, res) {

  let userId = req.params.userId;
  let user = await userModel.findById(userId)
  if (!user) {
    return res.send("No such user exists");
  }

  let deleteUser = await userModel.findOneAndUpdate({ _id: userId }, { isDelete: true });
  res.send({ status: true, data: deleteUser })

}

module.exports={
  createUser,getUserData,updateUser,loginUser,deleteUser
}