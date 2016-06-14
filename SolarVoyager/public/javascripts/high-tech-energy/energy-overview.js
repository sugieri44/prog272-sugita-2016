/**
 * Created by bcuser on 5/30/16.
 */
define(function() {
    'use strict';


    function getEnergyOverview() {
        console.log('getEnergyOverview was called');
        $.getJSON('/high-tech-energy', function(response) {
                console.log(response);
                $('#overview').html(JSON.stringify(response, null, 4));
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

    var energyOverview = {
        init: function() {
            console.log('energyOverview.init() was called');
            $('#elf-view').load('high-tech-energy/energy-overview-page', function(response) {
                getEnergyOverview();
            });
        }
    };
    return energyOverview;
});
