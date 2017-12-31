# gulp-strip-debug [![Build Status](https://travis-ci.org/sindresorhus/gulp-strip-debug.svg?branch=master)](https://travis-ci.org/sindresorhus/gulp-strip-debug)

> Strip `console`, `alert`, and `debugger` statements from JavaScript code with [`strip-debug`](https://github.com/sindresorhus/strip-debug)


## Install

```
$ npm install --save-dev gulp-strip-debug
```


## Usage

```js
const gulp = require('gulp');
const stripDebug = require('gulp-strip-debug');

gulp.task('default', () =>
	gulp.src('src/app.js')
		.pipe(stripDebug())
		.pipe(gulp.dest('dist'))
);
```


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
