var gulp = require('gulp');
var runSequence = require('run-sequence');
var exec = require('child_process').exec;

var gulpCopy = require('gulp-copy');
var sourceFiles = [ 'bower_components/**', 'images/**','node_modules/**','src/**' ,'deploy_key.enc','index.html','polymer.json','css/**','lib/**'];
var destination = 'out/';


function copy() {
    return gulp
    .src(sourceFiles)
    .pipe(gulpCopy(destination));   
}

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


 gulp.task('build', function() {
  copy();
});
 gulp.task('default', [
  'build'
]);
