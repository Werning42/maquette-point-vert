const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

function style() {

	return gulp.src('./src/sass/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('./css'))
		.pipe(browserSync.stream());
}

function watch() {
	browserSync.init({
		server: {
			baseDir: './'
		}
	});
	gulp.watch('./src/sass/*.scss', style);
	gulp.watch('./*.html').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;
