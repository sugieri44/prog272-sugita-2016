function objectToArray(obj){
	'use strict';
	console.log(obj);
	var objectAsArray = [];

	for(var key in obj){
		console.log(key);
		objectAsArray.push(key);
	}

	return objectAsArray;
}

module.exports.objectToArray = objectToArray;