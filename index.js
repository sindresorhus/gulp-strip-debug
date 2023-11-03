import {Buffer} from 'node:buffer';
import {transformAsync} from '@babel/core';
import stripDebug from 'strip-debug';
import {gulpPlugin} from 'gulp-plugin-extras';

export default function gulpStripDebug() {
	return gulpPlugin('gulp-strip-debug', async file => {
		const {code} = await transformAsync(file.contents.toString(), {plugins: [stripDebug]});
		file.contents = Buffer.from(code);
		return file;
	});
}
