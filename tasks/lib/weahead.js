module.exports = (function () {

	"use strict";

	// Add public functions to exports object to be used by the Grunt integration.
	var exports = {};

	exports.getDirName = function () {
		return 'test';
	};

	exports.getFileName = function () {
		return 'output.txt';
	};

	// Make them available to requiring code.
	return exports;

}());
