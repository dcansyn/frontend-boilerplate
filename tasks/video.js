import { globbySync } from "globby";
import gulp from "gulp";
import config from "../config.js";
import { getCache, setCache } from "./cache.js";

export const video = () => {
  let files = globbySync(config.video.source.paths);
  if (files.length === 0) return gulp.src(".");

  if (!config.build) {
    let cacheFiles = getCache("videos");
    if (cacheFiles) {
      files = files.filter((x) => !cacheFiles.some((s) => s === x));
    }
    if (files.length === 0) return gulp.src(".");
  }
  setCache("videos", files);

  return gulp.src(files, { encoding: false, allowEmpty: true, base: `${config.source}/videos` }).pipe(gulp.dest(config.video.destination.path));
};
