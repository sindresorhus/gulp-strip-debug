'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var stripDebug = require('strip-debug');

module.exports = function () {
	return through.obj(function (file, enc, cb) {
		if (file.isNull()) {
			cb(null, file);
			return;
		}

		if (file.isStream()) {
			cb(new gutil.PluginError('gulp-strip-debug', 'Streaming not supported'));
			return;
		}

		try {
			file.contents = new Buffer(stripDebug(file.contents.toString()).toString());
			cb(null, file);
		} catch (err) {
			cb(new gutil.PluginError('gulp-strip-debug', err, {fileName: file.path}));
		}
	});
};
