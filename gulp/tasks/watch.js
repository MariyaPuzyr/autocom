module.exports = function () {
  $.gulp.task('watch', function () {
    $.gulp.watch('./src/views/**/*.pug', $.gulp.series('pug'));
    $.gulp.watch('./src/styles/**/*.scss', $.gulp.series('styles:dev'));
    $.gulp.watch(['./src/images/**/*.{png,jpg,gif,svg}',
      './src/images/svg/**/*.{png,jpg,gif,svg}'], $.gulp.series('img:dev'));
    $.gulp.watch('./src/images/svg/*.svg', $.gulp.series('svg'));
    $.gulp.watch('./src/js/**/*.js', $.gulp.series('js:dev'));
  });
};