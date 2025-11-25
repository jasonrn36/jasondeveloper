const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function Styles() {
    return gulp.src("src/Styles/**/*.scss"),
    gulp.dest("./dist/Styles"),
    gulp.src("src/Styles/**/*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest("./dist"));
}

function Watch() {
    gulp.watch("src/Styles/**/*.scss", Styles);
}
exports.default = gulp.series(Styles);
exports.watch = gulp.series(Styles, Watch);
