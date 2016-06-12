/**
 * Created by charlie on 6/5/16.
 */

var express = require('express');
//var router = express.Router();
var connect = require('./connect');
var renewables = require('../models/renewables');
var highTechEnergies = require('../models/high-tech-energy');

var fs = require('fs');

var validRenewables = require('../data/Renewable.json');
var validHighTech = require('../data/HighTechEnergy.json');
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
    //if(collection === )
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

function insertHighTechEnergy(highTechEnergy, response) {
    if (!connect.connected) {
        connect.doConnection();
    }
    var newHighTechEnergy = new highTechEnergies({
        "MSN": highTechEnergy.MSN,
        "YYYYMM": highTechEnergy.YYYYMM,
        "Value": highTechEnergy.Value,
        "Column_Order": highTechEnergy.Column_Order,
        "Description": highTechEnergy.Description,
        "Unit": highTechEnergy.Unit
    });

    console.log('inserting', newHighTechEnergy['MSN']);

    newHighTechEnergy.save(function(err) {
        totalHighTechsSaved++;
        console.log('saved: ', newHighTechEnergy['Solar (quadrillion Btu)'],
            allMongo.numberOfHighTechs, totalHighTechsSaved);

        if (totalHighTechsSaved === allMongo.numberOfHighTechs) {
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

allMongo.readDataAndInsert = function(fileName, response) {
    fs.readFile(fileName, function(err, collection) {
        if (err) throw (err);
        collection = JSON.parse(collection);
        allMongo.numberOfRenewables = collection.length;
        for (var i = 0; i < collection.length; i++) {
            insert(collection[i], response);
        }
    });
}

module.exports = allMongo;
/**
 * Created by bcuser on 6/12/16.
 */
