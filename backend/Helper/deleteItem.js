const {Product} = require("../dataBase/model/product.js")

const deleteItem= (req,res)=>{
    // console.log(typeof(uuid.v4()));
    try{
        const {filter}=req.body;
        if(filter!={}){
            Product.deleteOne(filter).then((d)=>{
                console.log(d);
                res.send(d);
            }).catch((e)=>{
                console.log(e);
                res.send(e);
            })
        }
        else{
            res.send("cannot send empty filter")
        }
          
    }
    catch(e){
        res.status(500).json({msg:e.message})
    }
}

module.exports = deleteItem;