const express = require("express");
const router = express.Router();
const cheerio = require("cheerio");
const request = require("request");


router.get("/headline", (req, res)=>{
// axios
  request.get("https://www.feedster.com/category/advertising/", function(err, httpResponse, body){

    // .entry-content

    const $ = cheerio.load(body);
    
    const arr = [];

    // $('.entry-title').children().attr('href')
    $('.entry-title').each(function(i, el){

      arr.push({
        headline: $(this).text(),
        uri: $(this).children().attr('href')
      })
    })


    res.send(arr)
  })
});







module.exports = router;