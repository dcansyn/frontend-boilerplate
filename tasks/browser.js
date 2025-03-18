import browserSync from "browser-sync";
import config from "../config.js";

export const browser = (done) => {
  browserSync({ notify: true, port: config.port, server: { baseDir: [config.app] } });
  done();
};
