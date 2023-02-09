const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
    res.sendFile(__dirname + "/main.css");
    res.sendFile(__dirname + "/main.js");
});

app.listen(5501, function(){
    console.log("Server Started at 5501");
});