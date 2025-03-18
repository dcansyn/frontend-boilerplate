import autoprefixer from "autoprefixer";
import gulp from "gulp";
import cleanCss from "gulp-clean-css";
import concat from "gulp-concat";
import encode from "gulp-convert-encoding";
import csso from "gulp-csso";
import postCss from "gulp-postcss";
import gulpSass from "gulp-sass";
import * as defaultSass from "sass";
import config from "../config.js";

const sass = gulpSass(defaultSass);

const scss = () => {
  let result = gulp.src(config.scss.source.paths).pipe(encode({ from: "windows1250", to: "utf8" }));

  if (config.build) {
    result = result
      .pipe(sass({ outputStyle: "compressed", includePaths: ["node_modules"] }).on("error", sass.logError))
      .pipe(
        cleanCss({
          level: {
            1: { specialComments: 0 },
            2: {
              mergeAdjacentRules: true,
              mergeIntoShorthands: true,
              mergeMedia: true,
              removeEmpty: true,
              reduceNonAdjacentRules: true,
              restructureRules: true,
            },
          },
        })
      )
      .pipe(csso({ restructure: true, forceMediaMerge: true }));
  } else {
    result = result.pipe(sass({ outputStyle: "expanded", includePaths: ["node_modules"] }).on("error", sass.logError));
  }

  return result
    .pipe(postCss([autoprefixer()]))
    .pipe(concat(config.scss.destination.name))
    .pipe(gulp.dest(config.scss.destination.path));
};

const cssLibrary = () => {
  if (config.libCss.source.paths.length <= 0) {
    return gulp.src(".");
  }

  let result = gulp.src(config.libCss.source.paths).pipe(encode({ from: "windows1250", to: "utf8" }));
  if (config.build) {
    result = result
      .pipe(
        cleanCss({
          level: {
            1: { specialComments: 0 },
            2: {
              mergeAdjacentRules: true,
              mergeIntoShorthands: true,
              mergeMedia: true,
              removeEmpty: true,
              reduceNonAdjacentRules: true,
              restructureRules: true,
            },
          },
        })
      )
      .pipe(csso({ restructure: true, forceMediaMerge: true }));
  }

  return result.pipe(concat(config.libCss.destination.name)).pipe(gulp.dest(config.libCss.destination.path));
};

export const css = gulp.parallel(scss, cssLibrary);
