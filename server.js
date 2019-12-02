var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");

// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
var axios = require("axios");
var cheerio = require("cheerio");

// Require all models
var db = require("./models");

var PORT = 3000;

// Initialize Express
var app = express();




// // Scrape data from one site and place it into the mongodb db
// app.get("/scrape", function(req, res) {
//     // Make a request via axios for the news section of `ycombinator`
//     axios.get("https://news.ycombinator.com/").then(function(response) {
//       // Load the html body from axios into cheerio
//       var $ = cheerio.load(response.data);
//       // For each element with a "title" class
//       $(".title").each(function(i, element) {
//         // Save the text and href of each link enclosed in the current element
//         var title = $(element).children("a").text();
//         var link = $(element).children("a").attr("href");
//         var summary = $(element).children("p").text();
  
//         // If this found element had both a title and a link
//         if (title && link && summary) {
//           // Insert the data in the scrapedData db
//           db.scrapedData.insert({
//             title: title,
//             link: link,
//             summary: summary
//           },
//           function(err, inserted) {
//             if (err) {
//               // Log the error if one is encountered during the query
//               console.log(err);
//             }
//             else {
//               // Otherwise, log the inserted data
//               console.log(inserted);
//             }
//           });
//         }
//       });
//     });


// Listen on port 3000
app.listen(3000, function() {
    console.log("App running on port 3000!");
  });