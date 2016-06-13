/**
 * Created by bcuser on 6/12/16.
 */
var express = require('express');
var router = express.Router();
var renewables = require('../models/renewables');
var highTechEnergy = require('../models/highTechEnergy');
var allMongo = require('./all-mongo');
var connect = require('./connect');
//var mongoose = require('mongoose');

/* GET home page. */
router.get('/', function(req, res, next) { 'use strict';
    res.render('index', { title: 'Week09-MongooseBasics' });
});

var connected = false;

router.get('/getAllRenewables', function(request, response) {
    console.log("AllData route invoked.");
    if (!connect.connected) {
        connect.doConnection();
    }

    console.log("About to find renewables.");
    renewables.find({}, function(err, data) {
        console.log(data.length);
        console.log(data[0]);
        allData = data;

        allMongo.writeData('Renewables.json', allData);

        response.send({
            result: 'Success',
            allData: data
        });
    });
});

router.get('/getAllHighTech', function(request, response) {
    console.log("AllData route invoked.");
    if (!connect.connected) {
        connect.doConnection();
    }

    console.log("About to find highTechEnergy.");
    highTechEnergy.find({}, function(err, data) {
        console.log(data.length);
        console.log(data[0]);
        allData = data;

        allMongo.writeData('HighTechEnergy.json', allData);

        response.send({
            result: 'Success',
            allData: data
        });
    });
});

router.get('/emptyRenewablesCollection', function(request, response) {
    renewables.remove({}, function(err) {
        if (err) {
            response.send({result: 'err', err: err});
        } else {
            response.send({result: 'renewables collection removed'});
        }
    });
});

router.get('/emptyHighTechCollection', function(request, response) {
    highTechEnergy.remove({}, function(err) {
        if (err) {
            response.send({result: 'err', err: err});
        } else {
            response.send({result: 'highTech collection removed'});
        }
    });
});

router.get('/insertRenewableCollection', function(request, response) {
    allMongo.readRenewables(response);
});

router.get('/insertHighTechCollection', function(request, response) {
    allMongo.readHighTechEnergy(response);
});

router.get('/:id', function(request, response) {
    response.render(request.params.id, {});
});


module.exports = router;