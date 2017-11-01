var express = require("express");
var app = express();

//root route haha
app.get("/",function(req,res){
    res.render("home.ejs"); //embedded js
});

//new route
app.get("/posts",function(req, res){
   var posts = [
            {title: "Post 1", author: "Susy"},
            {title: "My adorable pet bunny", author: "Colt"},
            {title: "Can you believe this is an actual doggo?", author: "Colt"}
       ];
       
    res.render("posts.ejs", {posts: posts});   
});

app.get("/fallinlovewith/rusty/:thing", function(req, res){
    var thing = req.params.thing;
    res.render("love.ejs",{thingVar: thing});
});



app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is up and ready to go Sir.");
});
