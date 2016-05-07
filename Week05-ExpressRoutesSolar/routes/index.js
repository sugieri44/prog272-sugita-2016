var express = require('express');
var fs = require('fs');
;var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) { 'use strict';
  res.render('index', { title: 'Week05-ExpressRoutesSolar-Erina' });
});

router.get('/renewables', function(request, response) {
  console.log('Renewables called');

  fs.readFile('data/Renewable.json', 'utf8', function(err, data) {
    if (err) throw err;
    console.log(data);
    response.send({ result: 'Success', renewables: JSON.parse(data) });
  });

});

module.exports = router;
