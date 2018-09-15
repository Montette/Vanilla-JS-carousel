//Deklaracja zmiennych
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
// var imagemin = require('gulp-imagemin');
// var cache = require('gulp-cache');
// var useref = require('gulp-useref');
// var gulpIf = require('gulp-if');
// var cssnano = require('gulp-cssnano');
// var gutil = require('gulp-util');
// var concat = require('gulp-concat');
// const babili = require("gulp-babili");
// var del = require('del');
var runSequence = require('run-sequence').use(gulp);
const autoprefixer = require('gulp-autoprefixer');

//Definicja tasków
gulp.task('browserSync', function () {
    browserSync.init({
      server: {
      baseDir: 'src'
      },
    })
  })

  gulp.task('sass', () => {
    return gulp.src('src/sass/**/*.scss')
    .pipe(sass()) 
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.reload({
      stream: true
      }))
  });


  gulp.task('watch', ['browserSync', 'sass'], () => {
    gulp.watch('src/sass/**/*.scss', ['sass']);
    gulp.watch('src/*.html', browserSync.reload);
    gulp.watch('src/js/**/*.js', browserSync.reload);
  });

  