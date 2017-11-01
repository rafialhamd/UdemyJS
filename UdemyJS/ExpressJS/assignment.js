var express = require("express");
var app = express();

app.get("/", function(req,res){
    res.send("Hi there, welcome to my assignment :)");
});

app.get("/speak/:animal", function(req,res){
    var sound ={
        cow: "moo",
        dog: "woof",
        cat: "meow",
        rat: "memes"
    }
    
    res.send(sound[req.animal]);
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