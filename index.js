const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    const url = "https://api.waifu.im/search/";
    // res.sendFile(__dirname+"/index.html");
    https.get(url, function(response){
        response.on("data", function(data){
            const poke = JSON.parse(data);
            console.log(poke);
            const pic = poke.images[0].url;
            const height = poke.images[0].height;
            const width = poke.images[0].width;
            res.write("<h1>treasure</h1>");
            res.write('<img src="'+pic+'" alt="error" width="'+width+'" height="'+height+'">');
            res.send();
        });
    });
});

app.post("/", function(req, res){
});


app.listen(5501, function(){
    console.log("Server Started at 5501");
});
