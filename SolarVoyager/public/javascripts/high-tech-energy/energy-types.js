/**
 * Created by bcuser on 5/30/16.
 */
define(function() {
    'use strict';

    function getMsnTypes(energyTypes) {
        console.log('getMsnTypes was called');
        var uniqueTypes = [];
        var singleType = {
            msn: null,
            description: ''
        };

        function getShorterArray(longerArray) {
            console.log('getShorterArray() was called');
            singleType = Object.create(longerArray);
            singleType.msn = longerArray.MSN;
            singleType.description = longerArray.Description;

            return singleType;
        }

        function insert(msn) {
            console.log('insert() was called');
            var uniqueType = getShorterArray(msn);
            console.log(uniqueType);
            uniqueTypes.push(uniqueType);
        }

        //Insert the first item in the passed array
        insert(energyTypes[0]);

        //To check to see if a passed msn already exists in the array
        function isUnique(msn) {
            var result = true;
            for (var i = 0; i < uniqueTypes.length; i++) {
                if (uniqueTypes[i].MSN === msn) {
                    result = false;
                    break;
                }
            }
            return result;
        }

        //Loop through energyTypes and insert if msn is unique
        for (var i = 1; i < energyTypes.length; i++) {
            var current = energyTypes[i];
            if (isUnique(current.MSN)) {
                insert(current);
            }
        }

        return uniqueTypes;
    }

    function getEnergyTypes() {
        console.log('getEnergyTypes was called');
        $.getJSON('/high-tech-energy/energy-types', function(response) {
                //pass only array
                var types = getMsnTypes(response.energyTypes);
                $('#types').html(JSON.stringify(types, null, 4));
                //displayEnergyTypes(types);
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

    /*
     function displayEnergyTypes(types){
     var ul = document.getElementById('types');
     var li = document.createElement('li');
     types.forEach(function(type, i){
     li.appendChild(type.msn + type.description);
     ul.appendChild(li);
     $('#types').append(ul);
     });
     }*/

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
