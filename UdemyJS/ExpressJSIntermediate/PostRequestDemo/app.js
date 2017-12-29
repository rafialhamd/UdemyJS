var express = require("express");
var app = express();
   var friends = ["Tony", "Miranda", "Lily"];

//bodyparser stuff
var bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({extended: true}));


app.set("view engine", "ejs");

app.get("/", function(req,res){
    res.render("home");
});

app.get("/friends",function(req,res){
   res.render("friends", {friends: friends}); 
});

app.post("/addfriend", function(req,res) {
    var addFriend = req.body.newfriend;
    friends.push(addFriend);
    res.redirect("/friends");
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server started!!");
});