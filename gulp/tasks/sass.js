module.exports = function () {
  $.gulp.task('sass', function () {
    return $.gulp.src('sass/style.scss')
        .pipe($.gp.sourcemaps.init())
        .pipe($.sass())
        .pipe($.gp.autoprefixer({
          overrideBrowserslist: ['last 2 versions']
        }))
        .pipe($.gp.csso())
        .pipe($.gp.rename('style.min.css'))
        .pipe($.gp.sourcemaps.write(''))
        .pipe($.gulp.dest('build/css'))
        .pipe($.browserSync.stream());
  });
};