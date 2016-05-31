var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    'use strict';
    res.render('index', {
        title: 'Week05-ExpressRoutesSolar-Erina'
    });
});

//To handle renewable calls in their own folder
router.get('/renewables/:id', function(request, response) {
    console.log('renewables path');
    'use strict';
    response.render('renewables/' + request.params.id, {
        title: 'ElfComponent'
    });
});

// slash-someword
router.get('/:id', function(request, response) {
    'use strict';
    response.render(request.params.id, {
        title: 'ElfComponent'
    });
});


router.get('/renewables', function(request, response) {
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

router.get('/renewablesByIndex/:id', function(request, response) {
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

router.get('/renewablesByYear/:id', function(request, response) {
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


//To handle high-tech-energy calls in their own folder
router.get('/high-tech-energy/:id', function(request, response) {
    'use strict';
    response.render('high-tech-energy/' + request.params.id, {
        title: 'ElfComponent'
    });
});


router.get('/energyOverview', function(request, response) {
    'use strict';
    console.log('energyOverview called');

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
module.exports = router;
