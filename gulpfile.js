var gulp = require('gulp')
var react = require('gulp-react')

gulp.task("default", function() {
	gulp.src("./demo/js/*.js")
		.pipe(react())
		.pipe(gulp.dest('./demo/js/min/'))
})

gulp.watch("./demo/js/*.js", ['default'])