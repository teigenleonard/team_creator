var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

var ChiyaksSchema = mongoose.Schema({
  first : String,
  last : String
});


var Chiyaks = mongoose.model('chiyaks', ChiyaksSchema);


router.get("/", function(req,res){
  chiyaks.find(function(err, allChiyaks){
    if(err){
      console.log(err);
      res.sendStatus(500);
    }
    res.send(allChiyaks);
  });
});


router.post("/", function(req,res){

  var chiyak = new Chiyaks();
  chiyak.first = req.body.first;
  chiyak.last = req.body.last;
  employee.save(function(err, savedChiyak){
    if(err){
      console.log(err);
      res.sendStatus(500);
    }

    res.send(savedChiyak);
  });
});

module.exports = router;
