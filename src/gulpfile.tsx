const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-dart-sass');

function buildStyles() {
    return src('styles/**/*.scss') 
        .pipe(sass())              
        .pipe(dest('css/'));     
}

function watchTask() {
    watch(['styles/**/*.scss'], buildStyles);
}

exports.default = series(buildStyles, watchTask);


export {}