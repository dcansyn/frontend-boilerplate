import gulp from "gulp";
import fileinclude from "gulp-file-include";
import formatHTML from "gulp-format-html";
import config from "../config.js";

export const template = () =>
  gulp
    .src(config.template.source.paths)
    .pipe(fileinclude({ prefix: "@@", basepath: "@file", indent: true }))
    .pipe(formatHTML())
    .pipe(gulp.dest(config.template.destination.path));
