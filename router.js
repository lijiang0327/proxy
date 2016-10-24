'use strict';

var express = require('express');
var request = require('request');

var router = express.Router();

router.get('/', (req, res) => {
    request('http://google.com', (err, resp, body) => {
        res.status(200).end(body);
    });
});