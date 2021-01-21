import config from '../config.js';
import gulp from "gulp";

let video = () => gulp.src(config.video.source.paths).pipe(gulp.dest(config.video.target.path));

export default {
    default: video
};