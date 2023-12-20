const {Product} = require("../dataBase/model/product.js")

const getItem = (req,res)=>{
    // console.log(typeof(uuid.v4()));
    try{

        const {filter ,pagination}=req.body;
        
        Product.find(filter).skip(pagination*10).limit(10).then(d=>{
            console.log(d);
            res.status(200).send(d);
        }).catch((e)=>{
            console.log(e);
            res.status(500).json({msg : e.message})
        })
    }
    catch(e){
        res.status(500).json({msg:e.message})
    }
}

module.exports = getItem;