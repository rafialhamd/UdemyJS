var express = require("express");
var app = express();

app.get("/", function(req,res){
    res.send("Hi there, welcome to my assignment :)");
});

app.get("/speak/:animal", function(req,res){
    if(req.animal == "pig"){
    res.send("The pig says oink");
    }
    if(req.animal == "cow"){
    res.send("The cow says moo");
    }
    if(req.animal == "fox"){
    res.send("*retarded music tan probably likes*");
    }
});

app.get("/repeat/:sound/:repetitions", function(req,res){
    if(req.sound == "hello"){
        for(var i= 0;i < req.repetitions; i++ ){
        res.send("hello");
        }
    }
    if(req.animal == "blah"){
        for(var i= 0;i < req.repetitions; i++ ){
        res.send("blah");
        }
    }
  
});