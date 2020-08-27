"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
var prod = process.env.NODE_ENV === 'production';
app.set('port', prod ? process.env.PORT : 3065);
app.get('/', function (req, res, next) {
    res.send("서버 정상 동작!");
});
app.listen(app.get('port'), function () {
    console.log("server is runnig on " + app.get('port'));
});
