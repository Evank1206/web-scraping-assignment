const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WebScrapingSchema = new Schema({
    headline:{
        type: String,
        required: true
    },
    summary:{
        type: String,
        required: true
    },
    url:{
        type: String,
        required:true
    },
    // date: Date()
});

const WebScraping = mongoose.model("WebScraping", WebScrapingSchema);

module.exports = WebScraping;

