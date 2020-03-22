
// terminal -> gulp watch
// must have a body in html file

const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// Compile SCSS into CSS & inject into browsers
function style() {
    return gulp.src('src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream());
}

// Static server & watch scss + html files
function watch() {
    browserSync.init({
        server: {
            baseDir: ['src/', './']
        }
    });
    gulp.watch('src/scss/**/*.scss', style);
    gulp.watch('./*.html').on('change',browserSync.reload);
    gulp.watch('src/scripts/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;
