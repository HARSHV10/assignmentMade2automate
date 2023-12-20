const {Product} = require("../dataBase/model/product.js")

const updateItem = (req,res)=>{
    // console.log(typeof(uuid.v4()));
    const{productID,changes}= req.body;


    Product.updateOne({ productID:productID }, { $set: changes }).then((d)=>{
        res.send(d);
    }).catch(()=>{
        console.log(e);
        res.status(500).json({msg : e.message})
    })
}

module.exports = updateItem;