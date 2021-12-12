require('./Define')
const lodash = require('lodash')

/**
* Creates an array of the own enumerable string keyed property values of object
* @memberof Object#
* @instance
* @function Values
* @returns {array} values
*/	
Define(Object.prototype, 'Values', function () {
	return lodash.values(this)
})
