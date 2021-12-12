const browserify = require('browserify'), fs = require('fs'), UglifyJS = require("uglify-es")
let minifyOptions={compress:true,output:{quote_style:1}}

let pkg = require('../package.json')
let distFolder = '.Dist' + (pkg.name.includes('/') ? '/'+pkg.name.split('/')[0] : '')
try {fs.mkdirSync(distFolder, {recursive: true})} catch (e) {}

let name = pkg.name.split('/').pop()
let b = browserify()
let file = fs.createWriteStream(distFolder+'/'+name+'.js')
b.require('./'+pkg.main, {expose: pkg.name})
//b.require('./'+pkg.main)
file.on('finish', () => {
	fs.readFile(distFolder+'/'+name+'.js', 'utf-8', (err, data) => {
		let result = UglifyJS.minify(data, minifyOptions)
		fs.writeFile(distFolder+'/'+name+'.min.js', '/* '+pkg.name+' */\n'+result.code, 'utf-8', (err) => {})
	})
})
b.bundle().pipe(file)
