'use strict';

var gulp = require('gulp');
var hasp = require('../index.js');
var minify = require('gulp-minify-css');

gulp.task('default', function () {
  gulp.src('input/*.hcss')
    .pipe(hasp())
    .pipe(minify())
    .pipe(gulp.dest('output/'));
});
