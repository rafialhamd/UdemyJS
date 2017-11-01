var express = require("express");
var app = express();

app.get("/",function(req,res){
    res.render("home.ejs"); //embedded js
});
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is up and ready to go Sir.");
});
