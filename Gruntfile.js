module.exports = function (grunt) {
	"use strict"

	// This is just an example of a configuration.
	grunt.initConfig({
		weahead: {
			main: {
				options: {
					text: 'Hello world!'
				}
			}
		},
		clean: {
			tests: [
				"test/output.txt"
			]
		},
		nodeunit: {
			all: ['test/*_test.js']
		},
		jshint: {
			options: {
				curly: true,
				eqeqeq: true,
				eqnull: true,
				browser: true,
				debug: true,
				forin: true,
				noarg: true,
				noempty: true,
				boss: true,
				loopfunc: true,
				evil: true,
				laxbreak: true,
				bitwise: true,
				strict: true,
				undef: true,
				unused: true,
				nonew: true,
				globals: {
					process: true,
					module: true,
					require: true
				}
			},
			main: [
				'tasks/**/*.js',
				'test/**/*.js'
			]
		}
	});

	// Loads our custom task.
	grunt.loadTasks('tasks');

	// Always good with linting.
	grunt.loadNpmTasks('grunt-contrib-jshint');

	// Every project needs a clean up.
	grunt.loadNpmTasks('grunt-contrib-clean');

	// Every project should write tests.
	grunt.loadNpmTasks('grunt-contrib-nodeunit');

	// The default task cleans up any previous run, runs our custom task, executes the tests and cleans up again.
	grunt.registerTask('default', ['clean', 'jshint', 'weahead', 'nodeunit', 'clean']);

	// The test task only executes the tests.
	grunt.registerTask('test', ['clean', 'nodeunit', 'clean']);

};
