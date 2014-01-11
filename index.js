'use strict';
var gutil = require('gulp-util');
var through = require('through');
var stripDebug = require('strip-debug');

module.exports = function () {
	return through(function (file) {
		if (file.isNull()) {
			return this.queue(file);
		}

		if (file.isStream()) {
			return this.emit('error', new gutil.PluginError('gulp-strip-debug', 'Streaming not supported'));
		}

		try {
			file.contents = new Buffer(stripDebug(file.contents.toString()).toString());
		} catch (err) {
			return this.emit('error', new gutil.PluginError('gulp-strip-debug', err));
		}

		this.queue(file);
	});
};
