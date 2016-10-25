'use strict';

var express = require('express');
var request = require('request');

var router = express.Router();

router.all('*', (req, res) => {

    var options = {}
    if(req.headers.host === '127.0.0.1:3000') {
        req.headers.host = 'www.baidu.com';
    }
    // options.headers = req.headers;
    // console.log(req.headers);
    options.url = req.url;
    // options.url = "https://www.baidu.com";
    // console.log(options.url);
    // request('https://www.baidu.com').pipe(res);
    request(options).pipe(res);
    // request(options, (err, resp, body) => {
    //     console.log(err);
    //     // console.log(body);
    //     if(err) {
    //         res.status(404).end('您访问的页面走丢了！');
    //         return ;
    //     } else {
            
    //         console.log(resp.headers);
    //         var headers = resp.headers;
    //         // for(var key in headers) {
    //         //     if(headers.hasOwnProperty(key)) {
    //         //         console.log(key, headers[key]);
    //         //         res.set(key, headers[key]);
    //         //     }
    //         // }
    //         // res.set('Content-Type', 'text/html; charset=utf-8')
    //         res.send(resp.body);
    //     }
        
    // })
});

module.exports = router;