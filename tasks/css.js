import config from '../config.js';
import gulp from "gulp";
import concat from "gulp-concat";
import cleanCss from "gulp-clean-css";
import sass from "gulp-sass";
import csso from "gulp-csso";
import encode from "gulp-convert-encoding";
import autoprefixer from "autoprefixer";
import postCss from "gulp-postcss";

// Sass
let scss = () => {
    let result = gulp.src(config.scss.source.paths)
        .pipe(encode({ from: "windows1250", to: "utf8" }));

    if (config.prod) {
        result = result.pipe(sass({ outputStyle: ("compressed"), includePaths: ["node_modules"] }).on("error", sass.logError))
            .pipe(cleanCss({ level: { 1: { specialComments: 0 } } }));
    } else {
        result = result.pipe(sass({ outputStyle: ("expanded"), includePaths: ["node_modules"] }).on("error", sass.logError));
    }

    result = result.pipe(postCss([ autoprefixer() ]))
        .pipe(csso({ restructure: config.prod, debug: config.prod }))
        .pipe(concat(config.scss.target.name))
        .pipe(gulp.dest(config.scss.target.path));

    return result;
}

// Lib Css
let libCss = () => {
    if (config.libCss.source.paths.length <= 0) {
        return gulp.src(".");
    }

    let result = gulp.src(config.libCss.source.paths)
        .pipe(encode({ from: "windows1250", to: "utf8" }));

    if (config.prod) {
        result = result.pipe(cleanCss({ level: { 1: { specialComments: 0 } } }));
    }

    result = result.pipe(concat(config.libCss.target.name))
        .pipe(gulp.dest(config.libCss.target.path));

    return result;
};

export default {
    scss: scss,
    libCss: libCss
};