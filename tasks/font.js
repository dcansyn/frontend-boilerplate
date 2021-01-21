import config from '../config.js';
import gulp from "gulp";

let font = () => gulp.src(config.font.source.paths).pipe(gulp.dest(config.font.target.path));

export default {
    default: font
};