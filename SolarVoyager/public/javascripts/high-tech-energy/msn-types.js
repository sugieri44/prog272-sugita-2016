/**
 * Created by bcuser on 5/30/16.
 */
define(function() {
    'use strict';

    //get a list

    //do types.forEach(function(energyTypes)

    //and find a unique type of msn type 
    //and send back a list with 12 unique msn types

    function getMsnTypes() {
        console.log('getMsnTypes was called');
        $.getJSON('/msnTypes', function(response) {
                console.log(response);
                $('#msn').html(JSON.stringify(response, null, 4));
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

    var msnTypes = {
        init: function() {
            console.log('energyOverview.init() was called');
            $('#elf-view').load('high-tech-energy/msn-types-page', function(response) {
                getMsnTypes();
            });
        }
    };
    return msnTypes;
});
