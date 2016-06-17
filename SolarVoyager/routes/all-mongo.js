/**
 * Created by charlie on 6/5/16.
 */

var express = require('express');
//var router = express.Router();
var connect = require('./connect');
var RenewablesModel = require('../models/renewables');
var HighTechEnergiesModel = require('../models/high-tech-energy');
var fs = require('fs');

//var validRenewables = require('../data/Renewable.json');
//var validHighTechEnergy = require('../data/HighTechEnergy.json');
var allData;
var totalRenewablesSaved = 0;
var totalHighTechsSaved = 0;

function allMongo() {

}

allMongo.numberOfRenewables = 0;
allMongo.numberOfHighTechs = 0;

function insertRenewable(renewable, response) {
    'use strict';

    if (!connect.connected) {
        connect.doConnection();
    }

    //var renewableKey = renewables.getSimpleKeys(renewable);
    var newRenewable = new RenewablesModel({
        'Year': renewable.Year,
        'Solar (quadrillion Btu)': renewable['Solar (quadrillion Btu)'],
        'Geothermal (quadrillion Btu)': ['Geothermal (quadrillion Btu)'],
        'Other biomass (quadrillion Btu)': renewable['Other biomass (quadrillion Btu)'],
        'Wind power (quadrillion Btu)': renewable['Wind power (quadrillion Btu)'],
        'Liquid biofuels (quadrillion Btu)': renewable['Liquid biofuels (quadrillion Btu)'],
        'Wood biomass (quadrillion Btu)': renewable['Wood biomass (quadrillion Btu)'],
        'Hydropower (quadrillion Btu)': renewable['Hydropower (quadrillion Btu)']
    });

    newRenewable.save(function(err) {
        totalRenewablesSaved++;
        if (totalRenewablesSaved === allMongo.numberOfRenewables) {
            console.log('All saved');
            //mongoose.disconnect();
            response.send({
                result: 'Success'
            });
        }
    });
}

function insertHighTechEnergy(highTechEnergy, response) {
    'use strict';

    if (!connect.connected) {
        connect.doConnection();
    }
    var newHighTechEnergy = new HighTechEnergiesModel({
        'MSN': highTechEnergy.MSN,
        'YYYYMM': highTechEnergy.YYYYMM,
        'Value': highTechEnergy.Value,
        'Column_Order': highTechEnergy.Column_Order,
        'Description': highTechEnergy.Description,
        'Unit': highTechEnergy.Unit
    });

    newHighTechEnergy.save(function(err) {
        totalHighTechsSaved++;

        if (totalHighTechsSaved === allMongo.numberOfHighTechs) {
            //mongoose.disconnect();
            response.send({
                result: 'Success'
            });
        }
    });
}

allMongo.writeData = function(fileName, data) {
    'use strict';

    data = JSON.stringify(data, null, 4);
    fs.writeFile(fileName, data, function(err, data) {
        if (err) {
            throw (err);
        }
        console.log('success writing file');
    });
};

allMongo.readRenewables = function(response) {
    'use strict';

    fs.readFile('ValidRenewablesData.json', function(err, renewables) {
        if (err) {
            throw (err);
        }
        console.log('About to convert to JSON');
        renewables = JSON.parse(renewables);
        allMongo.numberOfRenewables = renewables.length;
        for (var i = 0; i < renewables.length; i++) {
            insertRenewable(renewables[i], response);
        }
    });
};

allMongo.readHighTechEnergy = function(response) {
    'use strict';

    fs.readFile('ValidHighTechEnergyData.json', function(err, collection) {
        if (err) {
            throw (err);
        }
        collection = JSON.parse(collection);
        allMongo.numberOfHighTechs = collection.length;
        for (var i = 0; i < collection.length; i++) {
            insertHighTechEnergy(collection[i], response);
        }
    });
};

module.exports = allMongo;
/**
 * Created by bcuser on 6/12/16.
 */
