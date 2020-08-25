module.exports = function() {
  $.gulp.task('serve-new', function(done) {
    $.browserSync.init({
      server: './dist',
      port: 4000,
      notify: false
    });
    done();
  });
};