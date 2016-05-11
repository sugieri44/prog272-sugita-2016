var request = require('supertest');
var app = require('../app');
var renewables = require('./data/json-as-js-renewables');
var energyUtils = require('../routes/energy-utils');

describe('Elvenware Energy Utils Suite', function() {
    'use strict';

    it('shows we can test', function() {
        expect(true).toBe(true);
    });

    it('objectToArray confirm works', function() {
        var sortedArray = energyUtils.objectToArray(renewables[0]);
        for (var i = 0; i < sortedArray.length - 1; i++) {
            expect(sortedArray[i][1]).toBeLessThan(sortedArray[i + 1][1]);
        }
    });
});