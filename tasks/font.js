import { globbySync } from "globby";
import gulp from "gulp";
import config from "../config.js";

export const font = () => {
  let files = globbySync(config.font.source.paths);
  if (files.length === 0) return gulp.src(".");

  return gulp.src(config.font.source.paths, { encoding: false, allowEmpty: true }).pipe(gulp.dest(config.font.destination.path));
};
