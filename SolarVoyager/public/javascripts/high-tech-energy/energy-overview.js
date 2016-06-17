/**
 * Created by bcuser on 5/30/16.
 */
define(['jquery', 'settings'], function($, settings) {
    'use strict';

    function getEnergyOverview() {
        console.log('getEnergyOverview was called');
        var routeType = settings.useDatabase ? 0 : 1;
        var highTechRoutes = ['/database/getAllHighTech', '/high-tech-energy'];
        $('#display').append(settings.useDatabase);
        $.getJSON(highTechRoutes[routeType], function(response) {
            if (settings.useDatabase === true &&
                    response.highTechEnergy === Array[0]) {
                    $('#display2').html('Database is currently empty');
            } else {
                console.log(response);
                $('#overview').html(JSON.stringify(response, null, 4));
                $('#display2').html(response.result);
            }
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
        msg: 'useDatabase: ',
        size: 'small',
        init: function() {
            console.log('energyOverview.init() was called');
            $('#elf-view').load('high-tech-energy/energy-overview-page', function(response) {
                $('#display').html(energyOverview.msg);
                $('#display2').html(energyOverview.size);
                getEnergyOverview();
            });
        }
    };
    return energyOverview;
});
