"use strict";
const concat = require('gulp-concat');
global.$ = {
  path: {
    task: require('./gulp/path/tasks.js')
  },
  gulp: require('gulp'),
  browserSync: require('browser-sync').create(),
  del: require('del')
};

$.path.task.forEach(function (taskPath) {
  require(taskPath)();
});
$.gulp.task('main-libs', function () {
  return $.gulp.src([
    './node_modules/jquery/dist/jquery.min.js',
    './node_modules/bootstrap/dist/js/bootstrap.min.js',
    './node_modules/slick-carousel/slick/slick.min.js',
    './src/js/jquery-ui.min.js',
    './node_modules/jquery-ui/ui/i18n/datepicker-uk.js'
  ])
      .pipe(concat('main-libs.min.js'))
      .pipe($.gulp.dest('./dist/js/'))

});
$.gulp.task('dev', $.gulp.series(
    'clean',
    $.gulp.parallel(
        'pug',
        'fonts',
        'styles:dev',
        'img:dev',
        'js:dev',
        'svg',
        'main-libs'
    )
));

$.gulp.task('default', $.gulp.series('serve-new', 'dev', 'watch'));