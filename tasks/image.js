import { globbySync } from "globby";
import gulp from "gulp";
import imagemin, { gifsicle, mozjpeg, optipng, svgo } from "gulp-imagemin";
import webp from "gulp-webp";
import config from "../config.js";

export const image = () => {
  let files = globbySync(config.image.source.paths);
  if (files.length === 0) return gulp.src(".");

  let result = gulp.src(config.image.source.paths, { encoding: false });

  if (config.build) {
    result = result
      .pipe(
        imagemin([
          gifsicle({ interlaced: true }),
          mozjpeg({ quality: 75, progressive: true }),
          optipng({ optimizationLevel: 5 }),
          svgo({ plugins: [{ removeViewBox: true }, { cleanupIDs: true }] }),
        ])
      )
      .pipe(webp());
  }

  result = result.pipe(gulp.dest(config.image.destination.path));

  return result;
};
