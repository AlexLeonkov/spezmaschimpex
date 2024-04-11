const {src, dest, parallel, watch, series} = require('gulp');
const scss = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

function browser() {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        notify: false,
    })
}

function wathing() {
    watch("./assets/scss/**/*.scss", css);
    watch("index.html").on('change', browserSync.reload);
}

function css() {
    return src("./assets/scss/**/*.scss")
        .pipe(scss())
        .pipe(dest("./assets/css/"))
        .pipe(browserSync.stream());
}

exports.css = css;
exports.wathing = wathing;
exports.default = series(
    series(css),
    parallel(browser, wathing)
);
