var gulp = require('gulp');
var browserSync = require('browser-sync');
var runSequence = require('run-sequence');
var pug = require('gulp-pug');
var htmlbeautify = require('gulp-html-beautify');
var webpackStream = require('webpack-stream');
var webpack = require('webpack');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var concatFiles = require('gulp-concat');
var eslint = require('gulp-eslint');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var gcmq = require('gulp-group-css-media-queries');
var imagemin = require('gulp-imagemin');
var svgSprite = require('gulp-svg-sprite');
var csvtojson = require('gulp-csvtojson');
var reload = browserSync.reload;

// pug
gulp.task('pug', function() {
  return gulp
    .src('src/pug/*.pug')
    .pipe(pug())
    .on('error', console.log)
    .pipe(gulp.dest('./'))
    .pipe(reload({ stream: true }));
});

// htmlBeautify
gulp.task('htmlBeautify', function() {
  var options = {
    indentSize: 2
  };

  return gulp
    .src('*.html')
    .pipe(htmlbeautify(options))
    .pipe(gulp.dest('./'))
    .pipe(reload({ stream: true }));
});

// js
gulp.task('js', function() {
  return gulp
    .src('src/js/app.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(webpackStream(require('./webpack.config.js'), webpack))
    .pipe(gulp.dest('script'))
    .pipe(reload({ stream: true }));
});

// scss
gulp.task('scss', function() {
  return gulp
    .src('src/scss/app.scss')
    .pipe(
      sass({
        outputStyle: 'expanded'
      }).on('error', sass.logError)
    )
    .pipe(
      autoprefixer({
        browsers: ['> 1%']
      })
    )
    .pipe(gcmq())
    .pipe(gulp.dest('style'))
    .pipe(reload({ stream: true }));
});

// csvToJSON
gulp.task('csvToJSON', function() {
  return gulp
    .src('src/csv/data.csv')
    .pipe(csvtojson({ toArrayString: true }))
    .pipe(gulp.dest('data'));
});

// pluginCSS
gulp.task('pluginCSS', function() {
  return gulp
    .src('src/plugin/css/**/*.css')
    .pipe(concatFiles('plugin.css'))
    .pipe(gulp.dest('style'))
    .pipe(reload({ stream: true }));
});

// pluginJS
gulp.task('pluginJS', function() {
  return gulp
    .src('src/plugin/js/**/*.js')
    .pipe(concatFiles('plugin.js'))
    .pipe(gulp.dest('script'))
    .pipe(reload({ stream: true }));
});

// optimizeImg
gulp.task('optimizeImg', function() {
  return gulp
    .src('img/**/*')
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.jpegtran({ progressive: true }),
        imagemin.optipng(),
        imagemin.svgo()
      ])
    )
    .pipe(gulp.dest('img'));
});

// svgSprite
gulp.task('svgSprite', function() {
  return gulp
    .src('img/svg-sprite/**/*.svg')
    .pipe(
      svgSprite({
        mode: {
          symbol: {
            dest: '',
            sprite: 'svg-sprite.svg'
          }
        }
      })
    )
    .pipe(gulp.dest('img'));
});

// uglifyJS
gulp.task('uglifyJS', function() {
  return gulp
    .src('script/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('script'));
});

// cleanCSS
gulp.task('cleanCSS', function() {
  return gulp
    .src('style/*.css')
    .pipe(cleanCSS({ compatibility: 'ie9' }))
    .pipe(gulp.dest('style'));
});

// markup
gulp.task('markup', function() {
  runSequence('pug', 'htmlBeautify');
});

// style
gulp.task('style', ['scss']);

// script
gulp.task('script', ['js']);

// plugin
gulp.task('plugin', ['pluginJS', 'pluginCSS']);

// build
gulp.task('build', ['markup', 'style', 'script', 'plugin', 'csvToJSON']);

// prod
gulp.task('prod', function() {
  runSequence('build', 'optimizeImg', 'uglifyJS', 'cleanCSS', 'svgSprite');
});

// default (watch)
gulp.task('default', ['build'], function() {
  browserSync({
    notify: false,
    port: 9000,
    logLevel: 'silent',
    server: {
      baseDir: ['./']
    }
  });

  gulp
    .watch(['*.html', 'style/**/*.css', 'script/*.js', 'data/*.json'])
    .on('change', reload);

  gulp.watch('src/pug/**/*.pug', ['markup']);
  gulp.watch('src/scss/**/*.scss', ['style']);
  gulp.watch('src/js/**/*.js', ['script']);
  gulp.watch('src/csv/*.csv', ['csvToJSON']);
  gulp.watch('src/plugin/js/**/*.js', ['pluginJS']);
  gulp.watch('src/plugin/css/**/*.css', ['pluginCSS']);
});
