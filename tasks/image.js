import config from '../config.js';
import gulp from "gulp";
import imagemin from "gulp-imagemin";

let image = () => {
    let result = gulp.src(config.image.source.paths);

    if (config.prod) {
        result = result.pipe(imagemin([
            imagemin.mozjpeg({ quality: 80, progressive: true }),
            imagemin.optipng({ optimizationLevel: 5 }),
            imagemin.gifsicle({ interlaced: true }),
            imagemin.svgo({
                plugins: [
                    { removeViewBox: true },
                    { cleanupIDs: false }
                ]
            })
        ]));
    }

    result = result.pipe(gulp.dest(config.image.target.path));
    
    return result;
}

export default {
    default: image
};