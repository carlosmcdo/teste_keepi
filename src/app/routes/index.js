var express = require('express');
var router = express.Router();
var https = require('https');

//Obtendo a home page
router.get('/', function(req, res, next) {
    var options = {
        hostname: 'api.github.com',
        port: 443,
        path: 'https://api.github.com/',
        method: 'GET',
        headers: {
            accept: '*/*',
            "User-Agent": "Awesome-Octocat-App"
        }
    };

    https.request(options, function(response) {
        response.pipe(res);
    }).on('error', function(e) {
        res.sendStatus(500);
    }).end();
});

module.exports = router;
