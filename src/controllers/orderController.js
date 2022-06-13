const orderModel = require('../models/orderModel')
const productModel = require('../models/productModel')
const userModel = require('../models/userModel')

const createOrder = async function (req, res) {
    let data = req.body
    let userId = req.body.userId
    let productId = req.body.productId
    let val = req.headers.isfreeappuser


    let userData = await userModel.findOne({ _id: userId })
    //for updation value  (doesn't matter that what value user inserted. we are updated value  by it's real value )
  
    // console.log(userData.isFreeAppUser)

    let productData = await productModel.findOne({ _id: productId })

    //    console.log(productData)
    if (userData != null && productData != null) {
        // console.log(productData.price)
        data.isFreeAppUser = userData.isFreeAppUser
        if (userData.isFreeAppUser) {
            // set ammount for new user
            data.ammount = 0;
            let createdData = await orderModel.create(data)
            res.send({ msg: createdData })

        }
        else {
            //ammount updated here ()
            // data.ammount = productData.price;
            if (productData.price > userData.balance) {

                res.send({msg:"insufficient Balance"})
            }
            else {
                //updated data ammount by original price beacuse here isFreeUserApp value is false so now blance will be deduct
                data.ammount = productData.price;
                //here deduct the balance
                userData.balance = userData.balance - productData.price
                console.log(userData.balance)
                
                let createdData = await orderModel.create(data)
                let uid=userData._id.toString();
                await userModel.findByIdAndUpdate(uid,{balance:userData.balance})
                res.send({ msg: createdData })
            }

        }
    } else {
        res.send({ msg: "userId and productId is mandatory please provide valid Id" })
    }

    // let createdData=  await ProductModel.create(data);
    // res.send({mess:createdData})
}
module.exports.createOrder = createOrder