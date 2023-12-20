const express = require('express');
const db= require('./dataBase/db')
const addItem = require("./Helper/addItem")
const updateItem = require("./Helper/updateItem")
const getItem = require("./Helper/getItem.js")
const deleteItem = require("./Helper/deleteItem.js")
const cors = require("cors")
const app = express();
app.use(cors())
app.use(express.json())


app.post('/getItem',getItem)

app.post('/addItem',addItem)
app.delete('/deleteItem',deleteItem);

app.put('/updateItem',updateItem)

app.listen(3000,()=>{
    console.log("Connected")
})