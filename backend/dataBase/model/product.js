const mongoose = require('mongoose');
 

const product = new mongoose.Schema({
    productID:String,
    name :String ,
    price:Number,
    description:String,
    imageUrl : String,
    Feature:[String],
    otherDesc:String
})
const Product = mongoose.model('Product', product);

module.exports ={Product}