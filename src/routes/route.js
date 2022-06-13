const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const ProductController=require('../controllers/productController')
const OrderController= require("../controllers/orderController")
const commonMW = require ("../middlewares/commonMiddlewares")





// for create user
router.post('/createUser',commonMW.mid1, UserController.createUSer)

// for create product
router.post('/createProduct', ProductController.createProduct )

// for create order
router.post('/createOrder', commonMW.mid1, OrderController.createOrder)











module.exports = router;