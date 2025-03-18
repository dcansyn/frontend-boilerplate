import { globbySync } from "globby";
import gulp from "gulp";
import concat from "gulp-concat";
import terser from "gulp-terser";
import config from "../config.js";

const js = () => {
  let files = globbySync(config.js.source.paths);
  if (files.length === 0) return gulp.src(".");

  let result = gulp.src(config.js.source.paths);

  if (config.build) {
    result = result.pipe(terser());
  }

  return result.pipe(concat(config.js.destination.name)).pipe(gulp.dest(config.js.destination.path));
};

const jsLibrary = () => {
  let files = globbySync(config.libJs.source.paths);
  if (files.length === 0) return gulp.src(".");

  return gulp.src(config.libJs.source.paths).pipe(terser()).pipe(concat(config.libJs.destination.name)).pipe(gulp.dest(config.libJs.destination.path));
};

export const javascript = gulp.parallel(js, jsLibrary);
