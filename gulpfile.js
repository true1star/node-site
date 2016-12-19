var gulp = require('gulp');
var browserify = require('gulp-browserify');

/*
gulp.task('test', function() {
        gulp.
            src('./test.js').
            pipe(mocha()).
            on('error', function(err) {
                    this.emit('end');
        });
});

gulp.task('watch', function(){
        gulp.watch('./*.js', ['test']);
});
*/

gulp.task('browserify', function() {
	return gulp.
		src('./public/js/newIndex.js').
		pipe(browserify()).
		pipe(gulp.dest('./bin'));
});

gulp.task('watch', function(){
	gulp.watch('./*.js', ['browserify']);
});
