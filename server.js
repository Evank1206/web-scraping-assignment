const express = require("express");
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 4000;

const db = require("./model");
const mongoose = require("mongoose");
// const connection = mongoose.collection;

mongoose.connect("mongodb://localhost:27017/WebScraping", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, ()=>{

    app.use(express.urlencoded({extended:true}));
    app.use(express.json());
    
    const apiRoutes  = require("./routes/apiRoutes");
    app.use("/api", apiRoutes);
    
    app.listen(PORT, ()=>{
        console.log(`SERVER CONNECTED TO http://localhost:4000`);
    });    
});

