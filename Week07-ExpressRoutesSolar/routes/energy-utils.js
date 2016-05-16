function objectToArray(obj){
	'use strict';
	console.log(obj);
	var objectAsArray = [];

	for(var key in obj){
		console.log(key);
		objectAsArray.push(key);
	}

	objectAsArray.sort(function(a,b){
		return a[1] > b[1];
	})
	return objectAsArray;
}

module.exports.objectToArray = objectToArray;