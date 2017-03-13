
var gulp = require('gulp');
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var pug = require('gulp-pug');


gulp.task('css', function () {
    var postcss    = require('gulp-postcss');
    var sourcemaps = require('gulp-sourcemaps');

    return gulp.src('source/styles/*.css')//сырой css
        .pipe( sourcemaps.init() )
        .pipe( postcss([ require('autoprefixer'), require('precss') ]) )
        .pipe( sourcemaps.write('.') )
        .pipe( gulp.dest('public/assets/styles') );//готовый css
});

gulp.task('views', function buildHTML() {
    return gulp.src('source/views/*.pug')//сырой html
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('public'))//готовый html
});
