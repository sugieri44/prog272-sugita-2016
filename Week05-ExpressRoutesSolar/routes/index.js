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
    //if (err) throw err;
    if(err)
    {
    	response.status(404).send(err);
    }else{
    	//console.log(data); 
    	var json = JSON.parse(data); //parse it to JavaScript object from string (they were strings in the file)
    	response.send({ result: 'Success', renewables: json});
    }
    
  });

});

module.exports = router;
