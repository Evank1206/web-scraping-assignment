const express = require("express");
const app = express();
const PORT = 3000;

const mongoose = require("mongoose");
// const db = require("./model/scrapingDB");
mongoose.connect('mongodb://localhost/web_Scraping', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.urlencoded({urlencoded:true}));
app.use(express.json());

const apiRouter = require("./routes/apiRoutes");
app.use("/api", apiRouter);





app.listen(PORT, ()=>{
    console.log(`server connected: http://localhost:3000`);
});

