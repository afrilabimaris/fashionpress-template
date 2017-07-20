var gulp   = require('gulp');
var include = require("gulp-include");
var sass = require('gulp-sass');
 
gulp.task('scss', function () {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('scss:watch', function () {
  gulp.watch('src/scss/**/*.scss', ['scss']);
});
  	
gulp.task('html', function() {
  return gulp.src('src/*.html')
  .pipe(include())
  .pipe(gulp.dest('dist/'));
});

gulp.task('watch', function () {
  gulp.watch('src/scss/**/*.scss', ['scss']);
  gulp.watch('src/**/*.html', ['html']);
});

gulp.task('compile-scss', function () {
    gulp.src('src/scss/style.scss')
        .pipe(sass())
        .on('error', function (err) {
            console.log(err.toString());

            this.emit('end');
        })
        .pipe(gulp.dest('dist/css/'));
});