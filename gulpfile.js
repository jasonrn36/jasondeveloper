import gulp from "gulp";
import * as sass from "sass";
import gulpSass from "gulp-sass";
import imagemin from "gulp-imagemin";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminOptipng from "imagemin-optipng";
import imageminSvgo from "imagemin-svgo";

const scss = gulpSass(sass);

// Compilar Sass
function Styles() {
  return gulp.src("src/Styles/**/*.scss")
    .pipe(scss().on("error", scss.logError))
    .pipe(gulp.dest("./dist/Styles"));
}

// Otimizar imagens
function Images() {
  return gulp.src("src/img/**/*")
    .pipe(imagemin([
      imageminMozjpeg({ quality: 75, progressive: true }),
      imageminOptipng({ optimizationLevel: 5 }),
      imageminSvgo()
    ]))
    .pipe(gulp.dest("./dist/img"));
}

// Observar mudanças
function Watch() {
  gulp.watch("src/Styles/**/*.scss", Styles);
  gulp.watch("src/img/**/*", Images);
}

export default gulp.series(Styles, Images, Watch);
