$(document).ready(function() { 'use strict';
    var insertUrl = '/insertValidCollection';

    function insertCollection() {
        var jqxhr = $.get(insertUrl, function(result) {
                alert( "success" );
                console.log(JSON.stringify(result, null, 4));
            })
            .done(function() {
                console.log( "second success" );
            })
            .fail(function() {
                alert( "error" );
            })
            .always(function() {
                console.log( "finished" );
            });
    }

    function getAll(){
        $.getJSON('/all-data', function(result) {
            $('#display').html(JSON.stringify(result, null, 4));
        })
        .done(function() {
            console.log( "second success" );
        })
        .fail(function() {
            alert( "error" );
        })
        .always(function() {
            console.log( "finished" );
        });
    }

    function emptyCollection(){
        $.getJSON('/emptyCollection', function(result) {
                $('#display').html(JSON.stringify(result, null, 4));
            })
            .done(function() {
                console.log( "second success" );
            })
            .fail(function() {
                alert( "error" );
            })
            .always(function() {
                console.log( "finished" );
            });
    }


    $('#insertValidData').click(insertCollection);
    $("#getAll").click(getAll);
    $("#emptyCollection").click(emptyCollection);

});