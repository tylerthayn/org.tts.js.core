require('@js/Core')
const fs = require('fs'), path = require('path'), { spawn } = require('child_process')

let requireMatch = /require\((.+)\)/ig

let pkg = require('../package.json')
let files = GetRequires(require.resolve('../'+pkg.main))


fs.writeFileSync(path.resolve(__dirname, 'jsdocScript.cmd'), 'jsdoc '+'"'+files.join('" "')+'" --destination "'+path.resolve(process.cwd(), '.Docs')+'" --package ../package.json', 'utf-8')

let jsdoc = spawn('cmd.exe', ['/c', path.resolve(process.cwd(), '.Scripts', 'jsdocScript.cmd')])


jsdoc.stdout.on('data', (data) => {
	console.log(data.toString())
})

jsdoc.stderr.on('data', (data) => {
  console.error(data.toString())
})

jsdoc.on('close', (code) => {
  console.log(`child process close all stdio with code ${code}`);
})

jsdoc.on('exit', (code) => {
  console.log(`child process exited with code ${code}`);
})



function GetRequires (file) {
	let requires = [file], contents = ''
	try {
		contents = fs.readFileSync(file, 'utf-8')
	} catch (e) {

	}
	let matches = contents.match(requireMatch)
	if (matches != null) {
		matches.forEach((f) => {
			f = f.replace('require', '').replace(/['"]/g, '').replace(/[()]/g, '')
			if (f.startsWith('./') || f.startsWith('../')) {
				let _files = GetRequires(require.resolve(path.resolve(path.dirname(file), f)))
				requires.push(_files)
			}
		})
	}
	return Array.Flatten(requires).Unique()
}

