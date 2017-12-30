//setup
var request = require("request");
var express = require("express");
var app = express();

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Movie App has started!!"); 
});

app.get("/results",function(req,res){

request('http://omdbapi.com/?s=california&apikey=thewdb', function(error, response, body){
   
    //check for error
    if(error){
        console.log("something went wrong");
    }
    else{
        //put all code here
        res.send(JSON.parse(body)["Search"][0]);
    }
});

   
});
