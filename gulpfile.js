var gulp = require('gulp');
var browser = require('browser-sync');
var browserSync = browser.create();
var gutil = require('gulp-util');
var webConfig = require('./app/src/base/config.default.js');
var fs = require('fs');
var rimraf = require('rimraf');

var path = {
  static: [
    './app/images/**/*.*',
    './app/plugins/**/*.*'
  ]
};


gulp.task('server', function () {
  browserSync.init({
    server: './app/www',
    port: 3000
  });
  gulp.watch('./app/**/*.*', function (file) {
    browserSync.reload();
  })
});

gulp.task('build', function () {
  rimraf.sync('./app/www');
  return gulp.src([
      'app/plugins/**/*.*',
    ], {
      base: 'app/'
    })
    .pipe(gulp.dest('app/www/'))
});
gulp.task('copy-to-dist', function () {
  rimraf.sync('./dist');
  return gulp.src(path.static, {
      base: 'app'
    })
    .pipe(gulp.dest('./dist'))
});

gulp.task('clean', function () {
  rimraf.sync('./dist');
});

//读取./src/config.demo.js ,修正config.js
gulp.task('rebuild:config', ['clean'], function () {
  if (process.env.NODE_ENV == 'product') {
    webConfig.scheme = 'release';
  } else {
    webConfig.scheme = 'alpha';
  }
  var txt = 'var config = ' + JSON.stringify(webConfig) + '; module.exports = config;';
  fs.writeFile('./app/src/module/config.js', txt, function (err) {
    // gulp.start(['copy-to-dist']);
  });

});
