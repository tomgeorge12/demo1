var express = require('express');
var app  = express();
let fs = require('fs');
var cardData=require('./data/carddata.json');
let bodyParser = require('body-parser');

// app.get('/',function(req,res){
//   res.header('Access-Control-Allow-Origin','*');
//   res.json(hospital);
// });

app.get('/getCardData',function(req,res){
  res.header('Access-Control-Allow-Origin','*');
  res.json(cardData);
});

app.use(bodyParser.urlencoded({
  extended:true
}));

app.listen(8282,function(){
  console.log('App running successfully');
});
