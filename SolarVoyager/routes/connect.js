/**
 * Created by bcuser on 6/6/16.
 */
var mongoose = require('mongoose');

var connect = {

    connected: false,

    simpleConnect: function() {
        var url = 'mongodb://127.0.0.1:27017/renew';
        connect.connected = true;
        mongoose.connect(url);
        var db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function(callback) {
            connected = true;
            console.log('Opened connection to mongo');
        });
    },

    // mongodb://<dbuser>:<dbpassword>@ds011281.mlab.com:11281/prog272-sugita
    mlabConnect: function() {
        connect.connected = true;
        var userName = 'foo';
        var password = 'boo';
        var siteAndPort = 'ds011281.mlab.com:11281';
        var databaseName = 'prog272-sugita';
        var url = 'mongodb://' + userName + ':' + password + '@' + siteAndPort + '/' + databaseName;
        console.log(url);
        mongoose.connect(url);

        // This part is optional
        var db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function(callback) {
            connect.connected = true;
            console.log('Opened connection to mongo');
        });
    },

    doConnection: function(useSimple) {
        var connectType = useSimple || false;
        if (connectType) {
            connect.simpleConnect();
        } else {
            connect.mlabConnect();
        }
    }
};

module.exports = connect;
