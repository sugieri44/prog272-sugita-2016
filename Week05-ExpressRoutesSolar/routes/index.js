var express = require('express');
var fs = require('fs');
var router = express.Router();

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

router.get('/renewablesByIndex/:id', function(request, response) {
    console.log('Renewables By Index called', request.params.id);

    fs.readFile('data/Renewable.json', 'utf8', function(err, data) {
        //if (err) throw err;
        if(err)
        {
            response.status(404).send(err);
        }else{
            //console.log(data);
            var json = JSON.parse(data); //parse it to JavaScript object from string (they were strings in the file)
            response.send({
                result: 'Success',
                renewables: json[parseInt(request.params.id)]});
        }

    });

});

router.get('/renewablesByYear/:id', function(request, response) {
    console.log('Renewables By Year called', request.params.id);

    fs.readFile('data/Renewable.json', 'utf8', function(err, data) {
        //if (err) throw err;
        if(err)
        {
            response.status(404).send(err);
        }else{
            //console.log(data);
            var json = JSON.parse(data); //parse it to JavaScript object from string (they were strings in the file)
            for(var i = 0; i < json.length; i++){
                console.log(json[i].Year);
                if(request.params.id === json[i].Year){
                    console.log("Found it!")
                    response.send({
                        result: 'Success',
                        renewables: json[i]});
                    return;
                }
            }
            response.send({
                result: 'Failure',
                renewables: null
            });


    };

});

});
module.exports = router;
