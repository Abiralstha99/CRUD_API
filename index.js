console.log("Hello, World!");
const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/productmodel');
const productRoute = require('./routes/productRoute');
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use("/api/products", productRoute);

app.get('/',(req,res)=> {
    res.send("Hello from Node API server");
})

mongoose.connect("mongodb+srv://abiralstha333:rgeGhcak3yBKhVrJ@crud.k5qluki.mongodb.net/?retryWrites=true&w=majority&appName=CRUD").then(() =>{
    console.log("Connected to database");
    app.listen(3000,() =>{
    console.log("Server is running");
})
}).catch(() =>{
    console.log("Connection Failed");
})