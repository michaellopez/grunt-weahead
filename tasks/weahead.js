module.exports = function (grunt) {
	"use strict";

	var path = require('path');
	var weahead = require('./lib/weahead');

	grunt.registerMultiTask('weahead', 'Our awesome We ahead plugin!', function () {

		// Grunt integration goes here.
		// Use public functions from weahead object.

		var options = this.options({text: 'Please enter a text in the Gruntfile.'});

		var dirname = weahead.getDirName();
		var filename = weahead.getFileName();
		grunt.file.write(path.join(dirname, filename), options.text);

	});
};
