/**
 * Created by bcuser on 5/30/16.
 */
define(function() {
    'use strict';

    //Should be in msn-types.js
    function getMsnTypes(energyTypes) {
        console.log('getMsnTypes was called');
        var currentMsn = {
            msn: null,
            description: ''
        };
        var uniqueMsn = [];



        function insert(msn){
            console.log("insert() was called");
            uniqueMsn.push(msn);
        }

        insert(energyTypes[0]);

        console.log(uniqueMsn[0]);
        function isUnique(msn){
            var result = true;
            for(var i = 0; i < energyTypes.length; i++){
                if(energyTypes[i].msn === msn){
                    result = false;
                    break;
                }
            }
            return result;
        }

        for(var i = 1; i < energyTypes.length; i++){
            console.log("hi");
            var current = energyTypes[i];
            if(isUnique(current.msn)){
                insert(current);
            }
        }

        return uniqueMsn;
    }

    function getEnergyTypes() {
        console.log('getEnergyTypes was called');
        $.getJSON('/energyTypes', function(response) {
                console.log(response);
            //pass only array
                var msn = getMsnTypes(response);
                $('#types').html(msn);
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

    function displayEnergyTypes(){
        //foreach array to display
        $('#types').html(JSON.stringify(response, null, 4));
    };

    var energyTypes = {
        init: function() {
            console.log('energyOverview.init() was called');
            $('#elf-view').load('high-tech-energy/energy-types-page', function(response) {
                getEnergyTypes();
            });
        }
    };
    return energyTypes;
});
