import gulp from "gulp";
import config from "../config.js";

export const video = () => gulp.src(config.video.source.paths).pipe(gulp.dest(config.video.destination.path));
