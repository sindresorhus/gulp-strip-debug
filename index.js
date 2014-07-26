'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var stripDebug = require('strip-debug');

module.exports = function () {
	return through.obj(function (file, enc, cb) {
		if (file.isNull()) {
			this.push(file);
			return cb();
		}

		if (file.isStream()) {
			this.emit('error', new gutil.PluginError('gulp-strip-debug', 'Streaming not supported'));
			return cb();
		}

		try {
			file.contents = new Buffer(stripDebug(file.contents.toString()).toString());
		} catch (err) {
			this.emit('error', new gutil.PluginError('gulp-strip-debug', err, {fileName: file.path}));
		}

		this.push(file);
		cb();
	});
};
