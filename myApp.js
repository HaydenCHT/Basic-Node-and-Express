require('dotenv').config()

//const { json } = require('body-parser');
const bodyParser = require('body-parser');
let express = require('express');
let app = express();

//console.log("Hello World")

//app.get("/name", (req, res) => {
    //res.send("Hello Express");
    //res.sendFile(__dirname + "/views/index.html");
    //let message = "Hello json";
    //process.env.MESSAGE_STYLE === "uppercase"?res.json({"message": message.toUpperCase()}):res.json({"message": message});
    //res.json({echo: req.params.word});
    //res.json({
      //name: `${req.query.first} ${req.query.last}`
    //})
  //});
  

//app.use("/public", express.static(__dirname + "/public"));
//app.use("/", function middleware(req, res, next){
  //console.log(req.method + " " + req.path + " - " + req.ip);
  //next();
//});
app.use("/", bodyParser.urlencoded({extended: false}));

//app.get("/", function (req, res, next) {
  //req.time = new Date().toString();
  //next();
//}, function(req, res) {
  //res.send({time: req.time});
//});

app.post("/name", function(req, res){
  res.json(({ name: `${req.body.first} ${req.body.last}` }));
});


 module.exports = app;
