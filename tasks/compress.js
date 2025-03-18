import { globbySync } from "globby";
import gulp from "gulp";
import brotli from "gulp-brotli";
import gzip from "gulp-gzip";
import config from "../config.js";

const compressFile = (sourcePath, destinationPath) => {
  let files = globbySync(sourcePath);
  if (files.length === 0) return gulp.src(".");

  return gulp
    .src(sourcePath, { encoding: false, allowEmpty: true })
    .pipe(gzip())
    .pipe(gulp.dest(destinationPath))
    .pipe(brotli.compress({ quality: 11 }))
    .pipe(gulp.dest(destinationPath));
};

const compressCss = () => compressFile(`${config.scss.destination.path}/*.css`, config.scss.destination.path);
const compressJs = () => compressFile(`${config.js.destination.path}/*.js`, config.js.destination.path);

export const compress = gulp.parallel(compressCss, compressJs);
