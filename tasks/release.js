import gulp from "gulp";
import config from "../config.js";

const releaseFile = (sourcePath, destinationPath) => gulp.src(sourcePath, { encoding: false }).pipe(gulp.dest(destinationPath));

export const release = () =>
  gulp.parallel(
    () => releaseFile(config.release.css.source.paths, config.release.css.destination.path),
    () => releaseFile(config.release.js.source.paths, config.release.js.destination.path),
    () => releaseFile(config.release.fonts.source.paths, config.release.fonts.destination.path)
  )();

export const releaseFull = () =>
  gulp.parallel(
    () => releaseFile(config.release.css.source.paths, config.release.css.destination.path),
    () => releaseFile(config.release.js.source.paths, config.release.js.destination.path),
    () => releaseFile(config.release.fonts.source.paths, config.release.fonts.destination.path),
    () => releaseFile(config.release.images.source.paths, config.release.images.destination.path),
    () => releaseFile(config.release.videos.source.paths, config.release.videos.destination.path)
  )();
