'use strict';

var path = require('path');
var express = require('express');
var http = require('http');

var router = require('./router')

var app = express();
app.use(router);

http.createServer(app).listen(3000, () => {
    console.log('server is running at port 3000!');
})

