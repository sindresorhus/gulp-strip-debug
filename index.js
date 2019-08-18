'use strict';
const through = require('through2');
const stripDebug = require('strip-debug');
const PluginError = require('plugin-error');

module.exports = () => {
	return through.obj(function (file, encoding, callback) {
		if (file.isNull()) {
			callback(null, file);
			return;
		}

		if (file.isStream()) {
			callback(new PluginError('gulp-strip-debug', 'Streaming not supported'));
			return;
		}

		try {
			file.contents = Buffer.from(stripDebug(file.contents.toString()).toString());
			this.push(file);
		} catch (error) {
			this.emit('error', new PluginError('gulp-strip-debug', error, {fileName: file.path}));
		}

		callback();
	});
};
