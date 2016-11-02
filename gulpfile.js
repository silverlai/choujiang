var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('dest',function(){
	gulp.src('src/*.html').pipe(gulp.dest('dest/'));
	gulp.src('src/js/*.js').pipe(gulp.dest('dest/js/'));
	gulp.src('src/img/*.*').pipe(gulp.dest('dest/img/'));
	gulp.src('src/css/*.less').pipe(less()).pipe(gulp.dest('dest/css/'));
});

gulp.task('watch',function(){
	gulp.watch('src/*.html',['dest']);
	gulp.watch('src/js/*.js',['dest']);
	gulp.watch('src/img/*.*',['dest']);
	gulp.watch('src/css/*.less',['dest']);
});