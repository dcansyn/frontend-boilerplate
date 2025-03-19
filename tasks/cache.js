import fs from "fs";
import path from "path";
import config from "../config.js";

export const getCache = (key) => {
  let cachePath = path.join(config.cache.path, `${key}.json`);
  if (!fs.existsSync(cachePath)) return null;

  let data = fs.readFileSync(cachePath, "utf8");
  return JSON.parse(data);
};

export const setCache = (key, data) => {
  if (!fs.existsSync(config.cache.path)) {
    fs.mkdirSync(config.cache.path);
  }

  let cachePath = path.join(config.cache.path, `${key}.json`);
  fs.writeFileSync(cachePath, JSON.stringify(data));
};
