var express = require("express");
var app = express();

// "/" will give you "hi there"
// when a get request is made to /, this is called, also called the root
app.get("/", function(request, response){
    response.send("Hi there");
}); 

// "/bye" will give you "Goodbye"
app.get("/bye", function(request, response){
    console.log(request);
    response.send("Goodbye");
}); 

// route order matters

app.get("/r/:subreddit/comments/:memes", function(req, res){
   res.send("Welcome to a subreddit!"); 
});

// "/wolf" will give you "OFWGKTA"
app.get("/wolf",function(req,res){
    res.send("Odd Future Wolf Gang Kill Them All"); 
});


// tell express to start listening for request/ starting the server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server has started");
}); 
// port of communication cloud 9 provides process.env.port