/**
 * Created by bcuser on 6/12/16.
 */
define(function() {
    'use strict';

    var routes = [
        '/database/insertRenewablesCollection',
        '/database/insertHighTechCollection',
        '/database/getAllRenewables',
        '/database/getAllHighTech',
        '/database/emptyRenewablesCollection',
        '/database/emptyHighTechCollection'
    ];

    function insertCollection(collection) {
        var routeType = (collection === 'Renewables' ? 0 : 1);
        console.log('calling: ', routes[routeType]);
        var jqxhr = $.get(routes[routeType], function(result) {
                alert('success');
                console.log(JSON.stringify(result, null, 4));
            })
            .done(function() {
                console.log('second success');
            })
            .fail(function() {
                alert('error');
            })
            .always(function() {
                console.log('finished');
            });
    }

    function getAll(collection) {
        var routeType = (collection === 'Renewables' ? 2 : 3);
        $.getJSON(routes[routeType], function(result) {
                $('#display').html(JSON.stringify(result, null, 4));
            })
            .done(function() {
                console.log('second success');
            })
            .fail(function() {
                alert('error');
            })
            .always(function() {
                console.log('finished');
            });
    }

    function emptyCollection(collection) {
        var routeType = (collection === 'Renewables' ? 4 : 5);
        $.getJSON(routes[routeType], function(result) {
                $('#display').html(JSON.stringify(result, null, 4));
            })
            .done(function() {
                console.log('second success');
            })
            .fail(function() {
                alert('error');
            })
            .always(function() {
                console.log('finished');
            });
    }

    var database = {
        collection: '',
        size: 'small',
        init: function() {
            console.log('database.init() was called');
            $('#elf-view').load('/database-page', function(response) {
                $('#insertValidData').click(function() {
                    database.collection = $('#collection').val();
                    insertCollection(database.collection);
                });
                $('#getAll').click(function() {
                    database.collection = $('#collection').val();
                    getAll(database.collection);
                });
                $('#emptyCollection').click(function() {
                    database.collection = $('#collection').val();
                    emptyCollection(database.collection);
                });
            });
        }
    };
    return database;
});
