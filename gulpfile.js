//==============//
// DEPENDENCIES //
//==============//

var pkg = require('./package.json');

var del = require('del');
var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var header = require('gulp-header');
var fs = require('fs');
var deploy = require('gulp-gh-pages');
var debug = require('gulp-debug');

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

  var banner = fs.readFileSync('src/header.js', 'utf8');

  gulp
    .src([
      './src/index.js'
    ])
    .pipe(concat('baseline-element.js'))
    .pipe(header(banner, { pkg : pkg } ))
    .pipe(gulp.dest('dist'))
    .pipe(uglify())
    .pipe(rename('baseline-element.min.js'))
    .pipe(header(banner, { pkg : pkg } ))
    .pipe(gulp.dest('dist'))
    .on('error', gutil.log)
  ;
});


//=======//
// DEMOS //
//=======//

gulp.task('demo-deploy', function () {
  return gulp.src('./demo/**/*.*')
    .pipe(debug({
      title: 'Deploy'
    }))
    .pipe(deploy());
});


//==============//
// DEFAULT TASK //
//==============//

gulp.task('default', ['build']);
