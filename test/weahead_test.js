module.exports = (function () {
	"use strict";

	var fs = require('fs');
	var weahead = require('../tasks/lib/weahead');

	var exports = {};

	exports.testGetFileName = function (test) {
		test.expect(1);

		var filename = weahead.getFileName();

		test.equal('output.txt', filename, 'Should give correct file name.');

		test.done();
	};

	exports.testGetDirName = function (test) {
		test.expect(1);

		var dirname = weahead.getDirName();

		test.equal('test', dirname, 'Should give correct directory name.');

		test.done();
	};

	exports.testOutput = function (test) {
		test.expect(2);

		var pathToOutput = './test/output.txt';

		var fileExists = fs.existsSync(pathToOutput);

		test.ok(fileExists, 'Output file should exists.');

		var contents = fs.readFileSync(pathToOutput, {encoding: 'utf8'});

		test.equal('Hello world!', contents, 'Contents of output file should match.');

		test.done();
	};

	return exports;

}());
