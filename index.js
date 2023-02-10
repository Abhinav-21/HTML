const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();

var options = {
  method: "GET",
  hostname: "rest.coinapi.io",
  path: "/v1/exchangerate/ETH/USD",
  headers: { "X-CoinAPI-Key": "510BEBAD-3900-46EC-9D9D-E646C4BF97B7" },
};

var requ = https.get(options, function (resp) {
  resp.on("data", function (dat) {
    const datum = JSON.parse(dat);
    console.log(datum);
  });
});

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  const url = "https://api.waifu.im/search/";
  // const requrl =
  //   "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true&precision=2";
  // https.get(requrl, function (response1) {
  //   response1.on("data", function (dayta) {
  //     const rate = JSON.parse(dayta).ethereum.usd;
  //     res.write("<h3>eth to usd exchange rate: " + rate + "</h3>");
  //   });
  // });
  https.get(url, function (response) {
    response.on("data", function (data) {
      poke = JSON.parse(data);

      console.log(poke);

      const pic = poke.images[0].url;
      const height = poke.images[0].height;
      const width = poke.images[0].width;

      res.write("<h1>treasure</h1>");
      res.write(
        '<img src="' +
          pic +
          '" alt="error" width="' +
          width / 5 +
          '" height="' +
          height / 5 +
          '">'
      );
      res.send();
    });
  });
});

app.post("/", function (req, res) {});

app.listen(5501, function () {
  console.log("Server Started at 5501");
});
