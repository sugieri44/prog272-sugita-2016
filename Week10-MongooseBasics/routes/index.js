var express = require('express');
var router = express.Router();
var scientists = require('../models/scientists');
var allMongo = require('./all-mongo');
var connect = require('./connect');
//var mongoose = require('mongoose');

/* GET home page. */
router.get('/', function(req, res, next) { 'use strict';
  res.render('index', { title: 'Week09-MongooseBasics' });
});

var connected = false;

router.get('/all-data', function(request, response) {
  console.log("AllData route invoked.");
  if (!connect.connected) {
    connect.doConnection();
  }

  console.log("About to find scientists.");
  scientists.find({}, function(err, data) {
    console.log(data.length);
    console.log(data[0]);
    allData = data;

    allMongo.writeData('scientists.json', allData);

    response.send({
      result: 'Success',
      allData: data
    });
  });
});

router.get('/emptyCollection', function(request, response) {
  scientists.remove({}, function(err) {
    if (err) {
      response.send({result: 'err', err: err});
    } else {
      response.send({result: 'collection removed'});
    }
  });
});

router.get('/insertValidCollection', function(request, response) {
  allMongo.readDataAndInsert(response);
});

router.get('/:id', function(request, response) {
  response.render(request.params.id, {});
});


module.exports = router;