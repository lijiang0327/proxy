'use strict';

var express = require('express');
var request = require('request');

var router = express.Router();

router.get('/', (req, res) => {
    request('https://www.google.com', (err, resp, body) => {
        res.setHeader('contentType', 'text/html; charset=UTF-8');
        res.status(200).end(body);
    });
});

module.exports = router;