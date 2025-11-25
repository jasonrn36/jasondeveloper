import gulp from "gulp";
import * as sass from "sass";
import gulpSass from "gulp-sass";


const scss = gulpSass(sass);

// Compilar Sass
function Styles() {
  return gulp.src("src/Styles/**/*.scss")
    .pipe(scss().on("error", scss.logError))
    .pipe(gulp.dest("./dist/Styles"));
}

// Observar mudanças
function Watch() {
  gulp.watch("src/Styles/**/*.scss", Styles);
}

export default gulp.series(Styles, Watch);
