
module.exports = {
	pre: `!(function () {\n`,
	post: `global._ = typeof module === 'object' ? module.exports : this._\n}())\n`
}
