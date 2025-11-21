/* Area to constants from node-js */
const gulp  = require("gulp");
const sass = require("gulp-sass")(require("sass"));

/* Area function convert scss in css */
function Styles() {
    return gulp.src("./src/Styles/*.scss")
    .pipe(sass(outStyle = 'compressed').on('error', sass.logError))
    .pipe(gulp.dest("./dist/Styles"));
}

/* Area to watching fonders */
/* In this function only watching de folders, don't watching out to folder */
function Watch() {
    gulp.watch('./src/Styles', Styles);
}

/* This area is calling to functions */
exports.Styles = Styles;
exports.watch = Watch;
exports.default = gulp.series(Styles, Watch);
