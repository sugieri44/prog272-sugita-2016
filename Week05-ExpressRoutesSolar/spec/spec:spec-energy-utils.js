var request = require('supertest');
var app = require('../app');
//Load data locally, instead of retrieving from db
var renewables = require('./data/json-as-js-renewables');
var energyUtils = require('../routes/energy-utils');

describe('Elvenware Energy Utils Suite', function() {
    'use strict';

    it('shows we can test', function() {
        expect(true).toBe(true);
    });

    it('confirms the number of properties in the object', function(){
        var sortedArray = energyUtils.objectToArray(renewables[0]);
        expect(sortedArray.length).toBe(8);
    })

    it('objectToArray confirm works', function() {
        console.log(renewables[0]);
        //passing the first object of the array
        var sortedArray = energyUtils.objectToArray(renewables[0]);
        for (var i = 0; i < sortedArray.length - 1; i++) {
            console.log(sortedArray[i]);
            //expect(sortedArray[i][1]).toBeLessThan(sortedArray[i + 1][1]);
        }
    });
});