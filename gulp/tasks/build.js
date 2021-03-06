const gulp      = require('gulp'),           // if you don't know this...GOOGLE.COM it's very useful
      babel     = require('gulp-babel'),     // transpiler for es6 javascript
      uglify    = require('gulp-uglify'),    // Make file into janky-space-saving code
      concat    = require('gulp-concat'),    // Make multiple files into one giant file
      rename    = require('gulp-rename');    // Rename file

gulp.task('build', () => {
  return gulp.src(['src/js/imports.js', 'src/js/api_client/system.js', 'src/js/responseHandlers.js'])
      .pipe(concat('ReadMe.js', {
          newLine: '\n\n'
      }))
      .pipe(gulp.dest('dist'))
      .pipe(rename('app.js'))
  	  .pipe(babel({
          presets: ['es2015'],
          comments: false
      }))
      .pipe(gulp.dest('dist/js'))
        .pipe(rename('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
});