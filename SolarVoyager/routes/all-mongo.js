/**
 * Created by charlie on 6/5/16.
 */

var express = require('express');
//var router = express.Router();
var connect = require('./connect');
var renewablesModel = require('../models/renewables');
var highTechEnergies = require('../models/high-tech-energy');
var renewables = require('../public/javascripts/renewables/renewables');
var fs = require('fs');

var validRenewables = require('../data/Renewable.json');
var validHighTechEnergy = require('../data/HighTechEnergy.json');
var allData;
var totalRenewablesSaved = 0;
var totalHighTechsSaved = 0;

function allMongo() {

}

allMongo.numberOfRenewables = 0;
allMongo.numberOfHighTechs = 0;

function insertRenewable(renewable, response) {
    if (!connect.connected) {
        connect.doConnection();
    }

    var renewableKey = renewables.getSimpleKeys(renewable);
    var newRenewable = new renewablesModel({
        'Year': renewableKey.year,
        'Solar (quadrillion Btu)': renewableKey.solar,
        'Geothermal (quadrillion Btu)': renewableKey.geo,
        'Other biomass (quadrillion Btu)': renewableKey.otherBiomass,
        'Wind power (quadrillion Btu)': renewableKey.wind,
        'Liquid biofuels (quadrillion Btu)': renewableKey.liquidBiofuels,
        'Wood biomass (quadrillion Btu)': renewableKey.wood,
        'Hydropower (quadrillion Btu)': renewableKey.hydropower
    });
    
    console.log('inserting', newRenewable['Year']);

    newRenewable.save(function(err) {
        totalRenewablesSaved++;
        console.log('saved: ', newRenewable['Solar (quadrillion Btu)'],
            allMongo.numberOfRenewables, totalRenewablesSaved);

        if (totalRenewablesSaved === allMongo.numberOfRenewables) {
            //mongoose.disconnect();
            response.send({
                result: 'Success'
            });
        }
    });
}

function insertHighTechEnergy(highTechEnergy, response) {
    if (!connect.connected) {
        connect.doConnection();
    }
    var newHighTechEnergy = new highTechEnergies({
        'MSN': highTechEnergy.MSN,
        'YYYYMM': highTechEnergy.YYYYMM,
        'Value': highTechEnergy.Value,
        'Column_Order': highTechEnergy.Column_Order,
        'Description': highTechEnergy.Description,
        'Unit': highTechEnergy.Unit
    });

    console.log('inserting', newHighTechEnergy['MSN']);

    newHighTechEnergy.save(function(err) {
        totalHighTechsSaved++;
        console.log('saved: ', newHighTechEnergy['Solar (quadrillion Btu)'],
            allMongo.numberOfHighTechs, totalHighTechsSaved);

        if (totalHighTechsSaved === allMongo.numberOfHighTechs) {
            //mongoose.disconnect();
            response.send({
                result: 'Success'
            });
        }
    });
}

allMongo.writeData = function(fileName, data) {
    var data = JSON.stringify(data, null, 4);
    fs.writeFile(fileName, data, function(err, data) {
        if (err) throw (err);
        console.log('success writing file');
    });
}

allMongo.readRenewables = function(response) {
    fs.readFile('renewable.json', function(err, renewables) {
        if (err) throw (err);
        renewables = JSON.parse(renewables);
        allMongo.numberOfRenewables = renewables.length;
        for (var i = 0; i < renewables.length; i++) {
            insertRenewable(renewables[i], response);
        }
    });
}

allMongo.readHighTechEnergy = function(response) {
    fs.readFile(validHighTechEnergy, function(err, collection) {
        if (err) throw (err);
        collection = JSON.parse(collection);
        allMongo.numberOfHighTechs = collection.length;
        for (var i = 0; i < collection.length; i++) {
            insertHighTechEnergy(collection[i], response);
        }
    });
}

module.exports = allMongo;
/**
 * Created by bcuser on 6/12/16.
 */
