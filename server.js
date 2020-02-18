const express = require("express");
const app = express();
const PORT = process.config.env || 5000;

const mongoose = require("mongoose");
const db = require("./model/scrapingDB");
mongoose.connect('mongodb://localhost/web_Scraping', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "web_Scraping"
});

app.use(express.urlencoded({extended:true}));
app.use(express.json());

const apiRouter = require("./routes/apiRoutes");
app.use("/api", apiRouter);





app.listen(PORT, ()=>{
    console.log(`server connected: http://localhost:${PORT}`);
});

