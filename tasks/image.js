import { globbySync } from "globby";
import gulp from "gulp";
import filter from "gulp-filter";
import imagemin, { gifsicle, mozjpeg, optipng, svgo } from "gulp-imagemin";
import webp from "gulp-webp";
import config from "../config.js";
import { getCache, setCache } from "./cache.js";

export const image = () => {
  let files = globbySync(config.image.source.paths);
  if (files.length === 0) return gulp.src(".");

  if (!config.build) {
    let cacheFiles = getCache("images");
    if (cacheFiles) {
      files = files.filter((x) => !cacheFiles.some((s) => s === x));
    }
    if (files.length === 0) return gulp.src(".");
  }
  setCache("images", files);

  let rasterFilter = filter(["**/*.{png,jpg,jpeg,gif}"], { restore: true });

  return gulp
    .src(files, { encoding: false, allowEmpty: true, base: `${config.source}/images` })
    .pipe(
      imagemin([
        gifsicle({ interlaced: true }),
        mozjpeg({ quality: 75, progressive: true }),
        optipng({ optimizationLevel: 5 }),
        svgo({
          plugins: [
            {
              name: "removeViewBox",
              active: true,
            },
            {
              name: "cleanupIDs",
              active: false,
            },
            {
              name: "minifyStyles",
              active: true,
            },
          ],
        }),
      ])
    )
    .pipe(rasterFilter)
    .pipe(webp())
    .pipe(rasterFilter.restore)
    .pipe(gulp.dest(config.image.destination.path));
};
