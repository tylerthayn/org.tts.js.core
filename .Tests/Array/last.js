require('../Object/Define')

Define(Array.prototype, 'last', {get: function () {return this.length > 0 ? this[this.length-1] : null}})
