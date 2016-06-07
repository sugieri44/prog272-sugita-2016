/**
 * Created by bcuser on 6/6/16.
 */
var mongoose = require('mongoose');

var scientistsSchema = mongoose.Schema({
    "firstName": String,
    "lastName": String,
    "subject": String,
    "subjects": [String],
    comments: [{ commentText: String, date: Date }]
});

module.exports = mongoose.model('scientists', scientistsSchema);