import config from '../config.js';
import gulp from "gulp";
import fileinclude from "gulp-file-include";

let template = () => gulp.src(config.template.source.paths)
    .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file',
        indent: true
    }))
    .pipe(gulp.dest(config.template.target.path));

export default {
    default: template
};