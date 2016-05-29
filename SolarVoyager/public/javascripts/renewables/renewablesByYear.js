/**
 * Created by bcuser on 5/23/16.
 */
define(function() {
    'use strict';

    function callGetByYear() {
        console.log('callGetByYear was called');
        //Get a user input
        var year = $('#year').val();
        console.log('year:', year);

        //Call JSON and pass the user inputmas a parameter
        $.getJSON('/renewablesByYear/' + year, function(response) {
                console.log(response);
                $('#debug').html(JSON.stringify(response, null, 4));
            })
            .done(function() {
                console.log('second success');
            })
            .fail(function(a, b, c) {
                console.log('Error', a, b, c);
            })
            .always(function() {
                console.log('complete');
            });
    }

    var renewablesByYear = {
        color: 'red',
        size: 'big',
        init: function() {
            console.log('renewablesByYear.init() was called');
            $('#elf-view').load('renewables/renewable-by-year', function(response) {
                $('#display').html(renewablesByYear.color);
                $('#display2').html(renewablesByYear.size);
                //When the input control changes, call callGetByIndex
                $('#year').change(function() {
                    callGetByYear();
                });
            });
        }
    };
    return renewablesByYear;
});
