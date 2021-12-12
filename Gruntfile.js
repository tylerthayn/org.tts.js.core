'use strict'

module.exports = function(grunt) {
	let pkg = require('./package.json')
	let cdn = {
		default: {
			options: {host: 'ttscloud.site', user: 'cdn'},
			files: {}
		}
	}
	let make = {
		default: {
			options: {
				src: './src',
				dir: './dist',
				file: 'org.tts.js.core.js',
				min: 'org.tts.js.core.min.js'
			}
		}
	}
	let readme = {
		default: {
			files: {
				'README.md': ['src/*.js', 'src/**/*.js']
			}
		}
	}

	//cdn.default.files['@js/core.js'] = ['dist/org.tts.js.core.js']
	//cdn.default.files['@js/core.min.js-'+pkg.version] = ['dist/org.tts.js.core.min.js']
	//grunt.loadNpmTasks('@js/grunt-cdn')


	grunt.initConfig({make: make, readme: readme})
	grunt.loadTasks('tasks')
	
}
