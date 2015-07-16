//==============//
// DEPENDENCIES //
//==============//

var del = require('del');
var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var header = require('gulp-header');
var fs = require('fs');
var pkg = require('./package.json');

//=========//
// GLOBALS //
//=========//

//=======//
// CLEAN //
//=======//

gulp.task('clean', function (callback) {
  del(['dist'], callback);
});


//=======//
// BUILD //
//=======//

gulp.task('build', ['clean'], function () {

  var header = fs.readFileSync('src/header.js', 'utf8');

  gulp
    .src([
      './src/index.js'
    ])
    .pipe(concat('baseline-element.js'))
    .pipe(header(header, { pkg : pkg } ))
    .pipe(gulp.dest('dist'))
    .pipe(uglify())
    .pipe(rename('baseline-element.min.js'))
    .pipe(header(header, { pkg : pkg } ))
    .pipe(gulp.dest('dist'))
    .on('error', gutil.log)
  ;
});


//==============//
// DEFAULT TASK //
//==============//

gulp.task('default', ['build']);
