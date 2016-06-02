/**
 * Created by bcuser on 5/30/16.
 */
define(function() {
    'use strict';

    function getEnergyTypes() {
        console.log('getEnergyTypes was called');
        $.getJSON('/high-tech-energy/energy-types', function(response) {
                console.log(response);
                $('#types').html(JSON.stringify(response, null, 4));
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
    
    //display by looping through a list
    

    var energyTypes = {
        init: function() {
            console.log('energyTypes.init() was called');
            $('#elf-view').load('high-tech-energy/energy-types-page', function(response) {
                getEnergyTypes();
            });
        }
    };
    return energyTypes;
});
