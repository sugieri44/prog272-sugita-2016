/**
 * Created by charlie on 6/5/16.
 */


var express = require('express');
//var router = express.Router();
var connect = require('./connect');
var renewables = require('../models/renewables');
var fs = require('fs');

var validRenewables = require('../data/Renewable.json');

var allData;
var totalRenewablesSaved = 0;

function allMongo() {

}

allMongo.numberOfRenewables = 0;

function insertRenewable(renewable, response) {
    if (!connect.connected) {
        connect.doConnection();
    }
    var newRenewable = new renewables({
        "Year": renewable.year,
        "Solar (quadrillion Btu)": renewable.solar,
        "Geothermal (quadrillion Btu)": renewable.geo,
        "Other biomass (quadrillion Btu)": renewable.otherBiomass,
        "Wind power (quadrillion Btu)": renewable.wind,
        "Liquid biofuels (quadrillion Btu)": renewable.liquidBiofuels,
        "Wood biomass (quadrillion Btu)": renewable.wood,
        "Hydropower (quadrillion Btu)": renewable.hydropower
    });

    console.log('inserting', newRenewable['Solar (quadrillion Btu)']);

    newRenewable.save(function(err) {
        totalRenewablesSaved++;
        console.log('saved: ', newRenewable['Solar (quadrillion Btu)'],
            allMongo.numberOfRenewables, totalRenewablesSaved);

        if (totalRenewablesSaved === allMongo.numberOfRenewables) {
            //mongoose.disconnect();
            response.send({result: 'Success'});
        }
    });
}

allMongo.writeData = function(fileName, data) {
    var data = JSON.stringify(data, null, 4);
    fs.writeFile(fileName, data, function(err, data) {
        if (err) throw(err);
        console.log('success writing file');
    });
}

allMongo.readDataAndInsert = function(response) {
    fs.readFile(validRenewables, function(err, renewables) {
        if (err) throw (err);
        renewables = JSON.parse(renewables);
        allMongo.numberOfRenewables = renewables.length;
        for (var i = 0; i < renewables.length; i++) {
            insertRenewable(renewables[i], response);
        }
    });
}

module.exports = allMongo;/**
 * Created by bcuser on 6/12/16.
 */
