'use strict';

var gulp = require('gulp');
var subtree = require('gulp-subtree');
var clean = require('gulp-clean');

gulp.task('deploy', ['default'], () => {
  return gulp.src('dist')
    .pipe(subtree({
      remote: 'origin',
      branch: 'gh-pages',
      message: 'Distribution Commit'
    }))
    .pipe(clean());
});
