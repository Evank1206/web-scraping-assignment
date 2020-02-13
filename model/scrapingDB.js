const mongoose = require("mongoose");

    const Schema = mongoose.Schema;
    // const ObjectId = Schema.ObjectId;
    
    const ScrapPost = new Schema({
        headline:String,
        img: String,
        summary: String,
        articlelink: String
    })
 

    const WebScraping = mongoose.model("WebScraping", ScrapPost);

    module.exports = WebScraping;