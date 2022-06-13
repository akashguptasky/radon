const ProductModel= require('../models/productModel')

const createProduct = async function(req,res)
{
    let data=req.body
    let createdData=  await ProductModel.create(data);
    res.send({mess:createdData})
}
module.exports.createProduct= createProduct;