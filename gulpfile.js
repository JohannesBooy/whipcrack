// ==================================================
// Gulp Variables
// ==================================================

var gulp = require('gulp'),
    gutil = require('gulp-util');

// Compass
var compass = require('gulp-compass');

// LiveReload
var livereload = require('gulp-livereload'),
    lr = require('tiny-lr'),
    server = lr();

// JSHint
var jshint = require('gulp-jshint');

// Concat & Minify JS
var concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

// Imagemin
var imagemin = require('gulp-imagemin');



// ==================================================
// Set Paths
// ==================================================

var sass_path  = '_/sass/';
var css_path   = '_/css/';
var js_path    = '_/js/';
var img_path   = '_/img/';
var font_path  = '_/font/';



// ==================================================
// Tasks
// ==================================================

// Lint JS
gulp.task('lint', function() {
    gulp.src(js_path + '*.js');
});


// Compass for Development
gulp.task('compass-dev', function() {
    gulp.src(sass_path + 'main.sass')
        .pipe(compass({
            style: 'expanded',
            comments: 'true',
            relative: 'true',
            css: css_path,
            sass: sass_path,
            javascript: js_path,
            image: img_path,
            font: font_path
        }))
        .pipe(gulp.dest(css_path))
        .pipe(livereload(server));
});


// Compass for Production
gulp.task('compass-prod', function() {
    gulp.src(sass_path + 'main.sass')
        .pipe(compass({
            style: 'compressed',
            comments: 'false',
            relative: 'true',
            css: css_path,
            sass: sass_path,
            javascript: js_path,
            image: img_path,
            font: font_path
        }))
        .pipe(gulp.dest(css_path));
});



// Concatenate & Minify JS
gulp.task('scripts', function() {
    gulp.src([
            js_path + 'plugins.js',
            js_path + 'main.js'
        ])
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(concat('all.js'))
        .pipe(gulp.dest(js_path))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(js_path))
        .pipe(livereload(server));
});


// Imagemin
gulp.task('imgmin', function() {
    gulp.src(img_path + '**')
        .pipe(imagemin())
        .pipe(gulp.dest(img_path));
});


// Reload
gulp.task('reload', function() {
    gulp.src(['*.php', '*/*.php', '*.html', '*/*.html'])
        .pipe(livereload(server));
});


// Preflight. Make ready for production.
gulp.task('preflight', function() {
    gulp.run('imgmin', 'scripts', 'compass-prod');
});


// Default Task
gulp.task('default', function () {

    // Fire up the LiveReload Server
    server.listen(35729, function (err) {
        if (err) return console.log(err);

        // Watch all the files in the sass directory
        gulp.watch(sass_path + '**', function() {
            gulp.run('compass-dev');
        });

        // Watch all the files in the js directory
        gulp.watch(js_path + '**', function() {
            gulp.run('scripts');
        });

        // Watch all the php and html files
        gulp.watch(['*.php', '*/*.php', '*.html', '*/*.html'], function() {
            gulp.run('reload');
        });
    });

});
