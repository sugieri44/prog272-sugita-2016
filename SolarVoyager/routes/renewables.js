/**
 * Created by bcuser on 6/1/16.
 */
var express = require('express');
var router = express.Router();
var fs = require('fs');

//If /renewable is called, it comes to this page anyway
//Nothing here gets called unless /renewables loaded
router.get('/', function(request, response) {
    'use strict';
    console.log('Renewables called');

    fs.readFile('data/Renewable.json', 'utf8', function(err, data) {
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

router.get('/byIndex/:id', function(request, response) {
    'use strict';
    console.log('Renewables By Index called', request.params.id);

    fs.readFile('data/Renewable.json', 'utf8', function(err, data) {
        if (err) {
            response.status(404).send(err);
        } else {

            var json = JSON.parse(data); //parse it to JavaScript object from string (they were strings in the file)
            var requestedRenewable = json[parseInt(request.params.id)];
            if (requestedRenewable !== undefined) {
                response.send({
                    result: 'Success',
                    renewables: requestedRenewable
                });
                return;
            }
            response.send({
                result: 'Failure',
                renewables: null
            });
        }
    });
});

router.get('/byYear/:id', function(request, response) {
    'use strict';
    var year = request.params.id;
    console.log('Renewables By Year called', year);

    fs.readFile('data/Renewable.json', 'utf8', function(err, data) {
        if (err) {
            response.status(404).send(err);
        } else {
            var json = JSON.parse(data);
            for (var i = 0; i < json.length; i++) {
                if (year === json[i].Year) {
                    response.send({
                        result: 'Success',
                        renewables: json[i]
                    });
                    return;
                }
            }
            response.send({
                result: 'Failure',
                renewables: null
            });
        }
    });

});

//To handle renewable calls in their own folder
router.get('/:id', function(request, response) {
    'use strict';
    console.log('hi 2');
    response.render('renewables/' + request.params.id, {
        title: 'ElfComponent'
    });
});

module.exports = router;
