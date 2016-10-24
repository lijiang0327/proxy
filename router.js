'use strict';

var express = require('express');
var request = require('request');

var router = express.Router();

router.all('*', (req, res) => {
    // request('https://www.baidu.com', (err, resp, body) => {
    //     console.log(resp);
    //     console.log(resp._multipart.getHeader());
    //     res.setHeader('contentType', 'text/html; charset=UTF-8');
    //     res.status(resp.statusCode).end(body);
    // });
    request.get('https://www.baidu.com').pipe(res);
});

module.exports = router;