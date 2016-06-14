/**
 * Created by bcuser on 6/12/16.
 */
var mongoose = require('mongoose');

var renewablesSchema = mongoose.Schema({
    'Year': String,
    'Solar (quadrillion Btu)': String,
    'Geothermal (quadrillion Btu)': String,
    'Other biomass (quadrillion Btu)': String,
    'Wind power (quadrillion Btu)': String,
    'Liquid biofuels (quadrillion Btu)': String,
    'Wood biomass (quadrillion Btu)': String,
    'Hydropower (quadrillion Btu)': String
});

module.exports = mongoose.model('renewables', renewablesSchema);
