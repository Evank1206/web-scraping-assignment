const express = require("express");
const router = express.Router();
const cheerio = require("cheerio");
const axios = require("axios");
// const colors = require("colors");

const db = require("../model/scrapingDB");

router.get("/scraping", (req, res, next)=>{
    // res.send("hello");
    axios.get("https://www.businessnewsdaily.com/latest").then( (UrlResponse) =>{
    // if(err) throw err;
        const $ = cheerio.load(UrlResponse.data);
    
        $("li.searchItem").each((i, element)=>{
            
            const result = {};

            result.headline = $(element).find("a").text();
            result.img = $(element).find("img.listImg").attr("src")
            result.summary = $(element).find("p").text();
            result.articlelink = $(element).find("a.thumbLeft").attr("href");
            
            db.WebScraping.create(result).then( (dbWebScraping)=>{
                
                res.send(dbWebScraping);
                console.log(dbWebScraping);
                
            }).catch( (err)=>{
                console.log(err);
            });

            // console.log("HEADLINE: " + headline.blue);
            // console.log("IMAGE: " + img.white);
            // console.log("SUMMARY: " + summary.cyan);
            // console.log("ARTICLE = URL: " + articlelink.green);
            // console.log(".........................................................\n");
        })
    // res.send("db conected");
    })
   
    // res.send(dbWebScraping);
    // console.log(dbWebScraping);
    // next();
// });

// router.get("/see", (req, res, next) =>{
//     // res.send("this i post");
//     db.WebScraping.find({}).then( (dbWebScraping)=>{

//         res.json(dbWebScraping);
//     })
      
})








module.exports = router;