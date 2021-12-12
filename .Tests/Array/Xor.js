require('../Object/Define')
require('./Difference')
require('./Unique')

Define(Array.prototype, 'Xor', function () {
	let xorArray = this
	for (let i=0; i<arguments.length; i++) {
		xorArray = Array.Difference(xorArray, arguments[i]).concat(Array.Difference(arguments[i], xorArray))
	}
	return xorArray ? xorArray.Unique() : []
})