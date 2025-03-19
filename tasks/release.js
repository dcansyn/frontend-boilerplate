import { globbySync } from "globby";
import gulp from "gulp";
import config from "../config.js";

const releaseFile = (sourcePath, destinationPath) => {
  let files = globbySync(sourcePath);
  if (files.length === 0) return gulp.src(".");

  return gulp.src(files, { encoding: false, allowEmpty: true }).pipe(gulp.dest(destinationPath));
};

const releaseCss = () => releaseFile(config.release.css.source.paths, config.release.css.destination.path);
const releaseJs = () => releaseFile(config.release.js.source.paths, config.release.js.destination.path);
const releaseFont = () => releaseFile(config.release.fonts.source.paths, config.release.fonts.destination.path);
const releaseImage = () => releaseFile(config.release.images.source.paths, config.release.images.destination.path);
const releaseVideo = () => releaseFile(config.release.videos.source.paths, config.release.videos.destination.path);

export const release = gulp.parallel(releaseCss, releaseJs, releaseFont);

export const releaseFull = gulp.parallel(releaseCss, releaseJs, releaseFont, releaseImage, releaseVideo);
