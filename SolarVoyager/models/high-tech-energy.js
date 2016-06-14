/**
 * Created by bcuser on 6/12/16.
 */

var mongoose = require('mongoose');

var highTechEnergySchema = mongoose.Schema({
    'MSN': String,
    'YYYYMM': String,
    'Value': String,
    'Column_Order': String,
    'Description': String,
    'Unit': String
});

module.exports = mongoose.model('highTechEnergy', highTechEnergySchema);
