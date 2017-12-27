var gulp = require('gulp')
// 编译jsx文件
var react = require('gulp-react')

gulp.task("default", function() {
	gulp.src("./demo/js/*.js")
		.pipe(react())
		.pipe(gulp.dest('./demo/js/min/'))
})

gulp.watch("./demo/js/*.js", ['default'])