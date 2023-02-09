const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    console.log(req.body);
    var a = Number(req.body.num1);
    var b = Number(req.body.num2);
    var c = Math.floor(100*Math.random())*a + Math.floor(100*Math.random())*b;
    res.send(200);
});


app.listen(5501, function(){
    console.log("Server Started at 5501");
});
