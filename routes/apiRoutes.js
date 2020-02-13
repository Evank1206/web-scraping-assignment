const express = require("express");
const router = express.Router();
const cheerio = require("cheerio");
const axios = require("axios");
const colors = require("colors");


const db = require("../model/scrapingDB");

router.get("/scraping", (req, res, next)=>{
    // res.send("hello");
    axios.get("https://www.businessnewsdaily.com/latest").then( ( UrlResponse) =>{
    // if(err) throw err;
        const $ = cheerio.load(UrlResponse.data);
    
        $("li.searchItem").each((i, element)=>{
            
            const result = {};

            result.headline = $(element).find("a").text();
            result.img = $(element).find("img.listImg").attr("src")
            result.summary = $(element).find("p").text();
            result.articlelink = $(element).find("a.thumbLeft").attr("href");
            
            db.WebScraping.create(result).then( (err , dbWebScraping)=>{
                if(err) throw err;
                console.log(dbWebScraping);
                

            })


            // console.log("HEADLINE: " + headline.blue);
            // console.log("IMAGE: " + img.white);
            // console.log("SUMMARY: " + summary.cyan);
            // console.log("ARTICLE = URL: " + articlelink.green);
            // console.log(".........................................................\n");
        })
    })
    // console.log(req);

    
    res.send();
    // next();
});


module.exports = router;