'use strict';
import gulpLoadPlugins from 'gulp-load-plugins';

var gulp = require('gulp');
const $ = gulpLoadPlugins();

gulp.task('deploy', ['default'], () => {
  return gulp.src('dist')
    .pipe($.subtree());
});
