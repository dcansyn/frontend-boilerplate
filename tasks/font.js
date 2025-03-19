import { globbySync } from "globby";
import gulp from "gulp";
import config from "../config.js";
import { getCache, setCache } from "./cache.js";

export const font = () => {
  let files = globbySync(config.font.source.paths);
  if (files.length === 0) return gulp.src(".");

  if (!config.build) {
    let cacheFiles = getCache("fonts");
    if (cacheFiles) {
      files = files.filter((x) => !cacheFiles.some((s) => s === x));
    }
    if (files.length === 0) return gulp.src(".");
  }
  setCache("fonts", files);

  return gulp.src(files, { encoding: false, allowEmpty: true }).pipe(gulp.dest(config.font.destination.path));
};
