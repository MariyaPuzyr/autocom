let plumber = require('gulp-plumber'),
    pug = require('gulp-pug'),
    cached = require('gulp-cached');

module.exports = function () {
  $.gulp.task('pug', () => {
    return $.gulp.src(['./src/views/index.pug', './src/views/pages/*.pug'])
        .pipe(plumber())
        .pipe(pug({
          pretty: true
        }))
        .pipe(plumber.stop())
        .pipe(cached('pug'))
        .pipe($.gulp.dest('./dist/'))
        .on('end', $.browserSync.reload);
  });
};