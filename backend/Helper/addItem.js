const {Product} = require("../dataBase/model/product.js")
const uuid = require('uuid')
const additem = (req,res)=>{
    // console.log(typeof(uuid.v4()));
    const {name,price, description,imageUrl,Feature,otherDesc}=req.body
    const product = new Product({
    productID:uuid.v4(),
    name :name ,
    price:price,
    description:description,
    imageUrl : imageUrl,
    Feature:Feature,
    otherDesc:otherDesc
    })

    product.save().then((d)=>{
        console.log("Successfull")
        res.status(200).json({msg:"item successfully added"})
    }).catch((e)=>{
        console.log(e);
        res.status(500).json({msg : e.message})
    })

}

module.exports = additem;