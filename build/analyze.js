const Fs = require('fs'), Path = require('path'), Strip = require('strip-comments'), UglifyJS = require("uglify-es")
let minifyOptions={compress:true,output:{quote_style:1}}

let requireMatch = /require\('(.+)'\)/g

let files = [], size = 0

Strip(Fs.readFileSync(Path.resolve(__dirname, '../src/index.js'), 'utf-8').trim().replace(/(\r\n)+\t*(\r\n)+/g, '\r\n')).match(requireMatch).forEach((match) => {
	let req = match.replace(/require\('/, '').replace(/'\)/, '').replace('./', '../src/')
	let src = Fs.readFileSync(Path.resolve(__dirname, req.endsWith('.js') ? req : req + '.js'), 'utf-8')
	let minSrc = UglifyJS.minify(src, minifyOptions).code

	size += minSrc.length
	files.push({file: req, size: minSrc.length})

})

files.sort((a, b) => {return b.size - a.size})

files.forEach((file) => {
	log(`${file.size} (${(Math.round(1000*file.size/size)/10).toFixed(3)})\t\t${file.file}`)
})
