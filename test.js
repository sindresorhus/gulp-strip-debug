'use strict';
var assert = require('assert');
var gutil = require('gulp-util');
var stripDebug = require('./index');

it('should strip debugging', function (cb) {
	var stream = stripDebug();

	stream.on('data', function (file) {
		assert.equal(file.contents.toString(), 'function test(){}');
		cb();
	});

	stream.write(new gutil.File({
		contents: new Buffer('function test(){debugger;}')
	}));
});
