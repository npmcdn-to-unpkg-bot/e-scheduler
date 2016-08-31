var express = require('express');
var jwt = require('express-jwt');
var cors = require('cors');
var quotes = require('./quotes.json');
var auth0Settings = require('./auth0.json');
var app = express();
app.use(cors());
function generateHexString(length) {
  var ret = "";
  while (ret.length < length) {
    ret += Math.random().toString(16).substring(2);
  }
  return ret.substring(0,length);
}

app.get('/api/quote', function (req, res) {
  var rand = Math.floor(Math.random() * quotes.length);
  res.json(quotes[rand]);
});

app.post('/api/login', function (req, res) {
  console.log("- /api/login POST request -");
  success=true;
  auth_token=generateHexString(10);
  profile={"picture": "basic", "name": "Hardin", "email": "fantom92@windowslive.com"};
  console.log("Response: ");
  console.log("isLoggedIn: "+ success+ ", auth_token: "+ auth_token);
  console.log("----------------------------------------");
  res.json({"success": success, "auth_token": auth_token, "profile": profile});
});

app.listen(3002, function () {
  console.log('Backend listening on port 3002!');
});