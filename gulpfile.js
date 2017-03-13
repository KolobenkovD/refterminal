
var gulp = require('gulp');
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('css', function () {
    var postcss    = require('gulp-postcss');
    var sourcemaps = require('gulp-sourcemaps');

    return gulp.src('source/styles/*.css')
        .pipe( sourcemaps.init() )
        .pipe( postcss([ require('autoprefixer'), require('precss') ]) )
        .pipe( sourcemaps.write('.') )
        .pipe( gulp.dest('public/assets/styles') );
});