import {Buffer} from 'node:buffer';
import transformStream from 'easy-transform-stream';
import PluginError from 'plugin-error';
import {transformAsync} from '@babel/core';
import stripDebug from 'strip-debug';

export default function gulpStripDebug() {
	return transformStream({objectMode: true}, async file => {
		if (file.isNull()) {
			return file;
		}

		if (file.isStream()) {
			throw new PluginError('gulp-strip-debug', 'Streaming not supported');
		}

		try {
			const {code} = await transformAsync(file.contents.toString(), {plugins: [stripDebug]});
			file.contents = Buffer.from(code);
		} catch (error) {
			throw new PluginError('gulp-strip-debug', error, {fileName: file.path});
		}

		return file;
	});
}
