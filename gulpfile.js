var gulp = require('gulp');

var sass = require('gulp-sass');

var cssbeautify = require('gulp-cssbeautify');

var browserSync = require('browser-sync').create();

gulp.task('hello', function () {
  console.log('Hello');
});

gulp.task('sass', function () {
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass())
    .pipe(cssbeautify({
      indent: '  ',
      autosemicolon: true
    }))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('js', function () {
  return gulp.src('app/js/**/*.js')
    .pipe(gulp.dest('app/js'))
});

gulp.task('watch', ['browserSync', 'sass'], function () {
  gulp.watch('app/scss/**/*.scss', ['sass']);
  gulp.watch('app/js/**/*.js', ['js']);
  gulp.watch('app/index.html', browserSync.reload);
});

gulp.task('browserSync', function () {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
});
