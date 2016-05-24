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

//Have to specify the new path
router.get('/renewables/:id', function(request, response) {
    response.render('renewables/' + request.params.id, { title: 'ElfComponent' });
});

// slash-someword
router.get('/:id', function(request, response) {
    response.render(request.params.id, { title: 'ElfComponent' });
});

/* PARAMETER PASSED IN JSON FORMAT
 router.get('/renewablesByIndex', function(request, response) {
     var index = parseInt(request.query.requestedIndex); //request.params.id
     console.log('Renewables By Index called', index);
    
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
         renewables: json[index]});
     }
    
     });

 });*/

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




/* PARAMETER PASSED IN JSON FORMAT
router.get('/renewablesByYear', function(request, response) {
    var year = request.query.requestedYear;
    console.log('Renewables By Year called', year);

    fs.readFile('data/Renewable.json', 'utf8', function(err, data) {
        //if (err) throw err;
        if(err)
        {
            response.status(404).send(err);
        }else{
            var json = JSON.parse(data); //parse it to JavaScript object from string (they were strings in the file)
            for(var i = 0; i < json.length; i++){
               // console.log(typeof json[i].Year, typeof year);
                if(year === json[i].Year){
                    //console.log("Found it!")
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

});*/

router.get('/renewablesByYear/:id', function(request, response) {
    var year = request.params.id;
    console.log('Renewables By Year called', year);

    fs.readFile('data/Renewable.json', 'utf8', function(err, data) {
        //if (err) throw err;
        if(err)
        {
            response.status(404).send(err);
        }else{
            var json = JSON.parse(data); //parse it to JavaScript object from string (they were strings in the file)
            for(var i = 0; i < json.length; i++){
                // console.log(typeof json[i].Year, typeof year);
                if(year === json[i].Year){
                    //console.log("Found it!")
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
