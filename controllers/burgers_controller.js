var express = require('express');
var burger = require("../models/burger"); // import burger.js

// create the router to be used for the app
var router = express.Router();

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hbsObj = {
            burgers: data
        };
        console.log(hbsObj);
        res.render("index", hbsObj);
    })
})

// export the app