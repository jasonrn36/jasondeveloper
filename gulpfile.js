/* Area of ​​variables that will be called by the functions. */
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

/* Area of functions that calling to variables and constants */
function Styles () {
    return gulp.src('./src/Styles/*.scss')
    .pipe(sass (). on ('error' , sass.logError))
    .pipe(gulp.dest('./dist/Styles'));
}

{

    exports.Styles = Styles; //Tarefa padrão
    exports.watch = function () {
        gulp.watch('./src/Styles/*.scss',  Styles); {

        };
    }
}
