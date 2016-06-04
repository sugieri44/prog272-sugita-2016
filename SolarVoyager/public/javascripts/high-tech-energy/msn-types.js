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

});
