import gulp from "gulp";
import brotli from "gulp-brotli";
import gzip from "gulp-gzip";
import config from "../config.js";

const compressFile = (sourcePath, destinationPath) =>
  gulp
    .src(sourcePath, { encoding: false })
    .pipe(gzip())
    .pipe(gulp.dest(destinationPath))
    .pipe(brotli.compress({ quality: 11 }))
    .pipe(gulp.dest(destinationPath));

export const compress = () =>
  gulp.parallel(
    () => compressFile(`${config.scss.destination.path}/*.css`, config.scss.destination.path),
    () => compressFile(`${config.libCss.destination.path}/*.css`, config.libCss.destination.path),
    () => compressFile(`${config.js.destination.path}/*.js`, config.js.destination.path),
    () => compressFile(`${config.libJs.destination.path}/*.js`, config.libJs.destination.path)
  )();
