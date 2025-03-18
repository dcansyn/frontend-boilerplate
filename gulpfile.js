import browserSync from "browser-sync";
import gulp from "gulp";
import run from "gulp4-run-sequence";
import config from "./config.js";

import { browser } from "./tasks/browser.js";
import { clean } from "./tasks/clean.js";
import { compress } from "./tasks/compress.js";
import { css } from "./tasks/css.js";
import { font } from "./tasks/font.js";
import { image } from "./tasks/image.js";
import { javascript } from "./tasks/javascript.js";
import { release, releaseFull } from "./tasks/release.js";
import { template } from "./tasks/template.js";
import { video } from "./tasks/video.js";

const reload = (done) => {
  browserSync.reload();
  done();
};

const watch = (done) => {
  gulp.watch(config.js.source.paths, { delay: 500 }, gulp.series(javascript, reload));
  gulp.watch(config.libJs.source.paths, { delay: 500 }, gulp.series(javascript, reload));
  gulp.watch(config.scss.source.paths, { delay: 500 }, gulp.series(css, reload));
  gulp.watch(config.libCss.source.paths, { delay: 500 }, gulp.series(css, reload));
  gulp.watch(config.template.source.watch, { delay: 500 }, gulp.series(template, reload));
};

gulp.task("compress", (cb) => run(compress, cb));
gulp.task("release", (cb) => run(release, cb));
gulp.task("release-full", (cb) => run(releaseFull, cb));
gulp.task("development", (cb) => run(javascript, css, template, [browser, watch], cb));
gulp.task("build", (cb) => run(clean, [font, image, video], javascript, css, template, cb));
