/**
 * Created by bcuser on 6/1/16.
 */
var express = require('express');
var fs = require('fs');
var router = express.Router();

router.get('/', function(request, response) {
    'use strict';
    console.log('high-tech-energy is called');

    fs.readFile('data/HighTechEnergy.json', 'utf8', function(err, data) {
        //if (err) throw err;
        if (err) {
            response.status(404).send(err);
        } else {
            var json = JSON.parse(data); //parse it to JavaScript object from string (they were strings in the file)
            response.send({
                result: 'Success',
                renewables: json
            });
        }
    });
});

router.get('/energy-types', function(request, response) {
    'use strict';
    console.log('energyTypes called');

    fs.readFile('data/HighTechEnergy.json', 'utf8', function(err, data) {
        //if (err) throw err;
        if (err) {
            response.status(404).send(err);
        } else {
            var json = JSON.parse(data); //parse it to JavaScript object from string (they were strings in the file)
            response.send({
                result: 'Success',
                energyTypes: json
            });
        }
    });
});

router.get('/:id', function(request, response) {
    'use strict';
    console.log('hi');
    response.render('high-tech-energy/' + request.params.id, {
        title: 'ElfComponent'
    });
});

module.exports = router;
