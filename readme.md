# gulp-strip-debug

> Strip `console`, `alert`, and `debugger` statements from JavaScript code with [`strip-debug`](https://github.com/sindresorhus/strip-debug)

## Install

```sh
npm install --save-dev gulp-strip-debug
```

## Usage

```js
import gulp from 'gulp';
import stripDebug from'gulp-strip-debug';

export default () => (
	gulp.src('src/app.js')
		.pipe(stripDebug())
		.pipe(gulp.dest('dist'))
);
```
