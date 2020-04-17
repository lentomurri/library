var express = require("express");
var router = express.Router();

//==HOME PAGE==//

router.get("/", function(req,res){
    res.send("Wiki home page");
  });
  
  //==ABOUT PAGE==//
  
  router.get("/about", function(req,res){
    res.send("Wiki info");
  });

  module.exports = router;