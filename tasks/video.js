import { globbySync } from "globby";
import gulp from "gulp";
import config from "../config.js";

export const video = () => {
  let files = globbySync(config.video.source.paths);
  if (files.length === 0) return gulp.src(".");

  return gulp.src(config.video.source.paths, { encoding: false, allowEmpty: true }).pipe(gulp.dest(config.video.destination.path));
};
