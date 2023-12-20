const mongoose=require('mongoose');

// enter your database url 

const url="url"
mongoose.connect(url).then((msg)=>{
    console.log("connected to database")
}).catch((err)=>{
    console.log(err)
})


const db =mongoose.connection;

module.exports=db

