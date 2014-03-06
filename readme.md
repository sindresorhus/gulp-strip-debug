# [gulp](https://github.com/wearefractal/gulp)-strip-debug [![Build Status](https://travis-ci.org/sindresorhus/gulp-strip-debug.png?branch=master)](https://travis-ci.org/sindresorhus/gulp-strip-debug)

> Strip `console`, `alert`, and `debugger` statements from JavaScript code with [strip-debug](https://github.com/sindresorhus/strip-debug)


## Install

```bash
$ npm install --save-dev gulp-strip-debug
```

## Example

```js
var gulp = require('gulp');
var stripDebug = require('gulp-strip-debug');

gulp.task('default', function () {
	gulp.src('src/app.js')
		.pipe(stripDebug())
		.pipe(gulp.dest('dist'));
});
```


## License

[MIT](http://opensource.org/licenses/MIT) © [Sindre Sorhus](http://sindresorhus.com)
