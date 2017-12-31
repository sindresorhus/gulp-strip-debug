'use strict';
const through = require('through2');
const stripDebug = require('strip-debug');
const PluginError = require('plugin-error');

module.exports = () => {
	return through.obj(function (file, enc, cb) {
		if (file.isNull()) {
			cb(null, file);
			return;
		}

		if (file.isStream()) {
			cb(new PluginError('gulp-strip-debug', 'Streaming not supported'));
			return;
		}

		try {
			file.contents = Buffer.from(stripDebug(file.contents.toString()).toString());
			this.push(file);
		} catch (err) {
			this.emit('error', new PluginError('gulp-strip-debug', err, {fileName: file.path}));
		}

		cb();
	});
};
