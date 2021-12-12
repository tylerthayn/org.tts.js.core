let _ = require('lodash')
let _def = Object.defineProperty

_def(_, 'First', {value: function (a) {
	return a[0]
}})

_def(_, 'Last', {value: function (a) {
	return a[a.length - 1]
}})

_def(_, 'Head', {value: function (a) {
	return Array.prototype.slice.call(a, 0, -1)
}})

_def(_, 'Tail', {value: function (a) {
	return Array.prototype.slice.call(a, 1)
}})


module.exports = _


