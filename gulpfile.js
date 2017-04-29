var gulp = require('gulp');
var connect = require('gulp-connect');
// var sha256 = require('js-sha256').sha256;
//var bg = require("gulp-bg");

// gulp.task("server", bg("node", "--harmony", "gulpfile.js"));
//
// gulp.task("default", ["server"], function() {
// 	gulp.watch(["gulpfile.js"], ["server"]);
// });
gulp.task('default', function () {
	connect.server({
		root: 'public',
		port: 8080
	})
});