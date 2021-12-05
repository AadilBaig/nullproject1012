var numb = 10;
var lives = 3;

const { json } = require("express");
var express = require("express");
var app = express();

app
  .post("/post", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    console.log("New express client");
    console.log("Received: ");
    console.log(JSON.parse(req.query["data"]));
    var z = JSON.parse(req.query["data"]);

    if (z["action"] == "rng") {
      var num = Math.random();
      if (num < 0.1) num += 0.1;
      num = Math.floor(num * z["numb"]);
      var jsontext = JSON.stringify({
        action: "rng",
        num: num,
      });
      res.send(jsontext);
    } else if (z["action"] == "check") {
      var outcome;
      if (z["input"] == z["num"]) {
        outcome = true;
        numb *= 10;
      } else {
        outcome = false;
        lives--;
      }
      var jsontext = JSON.stringify({
        action: "check",
        lives: lives,
        result: outcome,
        num: z["num"],
        input: z["input"],
        numb: numb,
      });
      res.send(jsontext);
    } else if (z["action"] == "final") {
      var jsontext = JSON.stringify({
        action: "final",
        score: numb,
      });
      res.send(jsontext);
      numb = 10;
      lives = 3;
    }
  })
  .listen(3000);
