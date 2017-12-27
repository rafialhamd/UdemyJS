var express = require("express");
var app = express();
//including public directory
app.use(express.static("public"));
app.set("view engine", "ejs");

//root route haha
app.get("/",function(req,res){
    res.render("home"); //embedded js
});

app.get("/fallinlovewith/:thing", function(req, res){
    var thing = req.params.thing;
    res.render("love", {thingVar: thing});
});

//new route
app.get("/posts",function(req, res){
  var posts = [
            {title: "Post 1", author: "Susy"},
            {title: "My adorable pet bunny", author: "Colt"},
            {title: "Can you believe this is an actual doggo?", author: "Colt"}
      ];
       
    res.render("posts", {posts: posts});   
});





app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is up and ready to go Sir.");
});
