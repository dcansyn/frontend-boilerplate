import gulp from "gulp";
import config from "../config.js";

export const font = () => gulp.src(config.font.source.paths, { encoding: false }).pipe(gulp.dest(config.font.destination.path));
