# ![gulpjs](https://avatars0.githubusercontent.com/u/6200624?v=3&s=40) Hasp Gulp plugin

Run [Hasp](https://github.com/djanowski/hasp) precompiler in your gulp pipeline.

## Sample usage

```js
var gulp = require('gulp');
var hasp = require('gulp-hasp-css');

gulp.task('haspify', function () {
  gulp.src('src/*.hcss')
    .pipe(hasp())
    .pipe(gulp.dest('dest/'));
});

```

## Examples

Example of how to use it is stored in `example/` directory. Example translates `.hcss` files from `input/` to `output/`, also minifying them on the way (functionality not included in the plugin).

To run the example clone repository and run:

```shell
npm test
```

___
*original hasp repo [link](https://github.com/djanowski/hasp)*

*for Grunt task see [grunt-hasp-css](https://www.npmjs.com/package/grunt-hasp-css)*
