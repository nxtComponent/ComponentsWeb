var gulp = require('gulp');
var runSequence = require('run-sequence');
var exec = require('child_process').exec;

gulp.task('jekyll-build', function (cb) {
  exec('jekyll build --trace', function (err, stdout, stderr) {
    cb(err);
  });
 });
gulp.task('bower-update', function (cb) {
  exec('bower update', function (err, stdout, stderr) {
    cb(err);
  });
 });


 gulp.task('build', function(done) {
  runSequence('bower-update', 'jekyll-build', function() {     
      done();
  });
});
 gulp.task('default', [
  'build'
]);
