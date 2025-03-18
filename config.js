const port = 3000;
const app = "app";
const source = "source";
const release = "release";

let config = {
  build: process.argv[2] === "build",
  app: app,
  source: source,
  port: port,
  cache: {
    path: `${source}/cache`,
  },
  template: {
    destination: {
      path: app,
    },
    source: {
      paths: [`${source}/template/pages/**/*.html`],
      watch: [`${source}/template/**/*.html`],
    },
  },
  scss: {
    destination: {
      name: "all.min.css",
      path: `${app}/assets/css`,
    },
    source: {
      paths: [`${source}/scss/**/*.scss`],
    },
  },
  libCss: {
    destination: {
      name: "lib.min.css",
      path: `${app}/assets/css`,
    },
    source: {
      paths: [`${source}/lib/css/**/*.css`],
    },
  },
  js: {
    destination: {
      name: "all.min.js",
      path: `${app}/assets/js`,
    },
    source: {
      paths: [`${source}/js/**/*.js`],
    },
  },
  libJs: {
    destination: {
      name: "lib.min.js",
      path: `${app}/assets/js`,
    },
    source: {
      paths: [`${source}/lib/js/**/*.js`],
    },
  },
  font: {
    destination: {
      path: `${app}/assets/fonts`,
    },
    source: {
      paths: [`${source}/fonts/**/*.{eot,svg,ttf,woff,woff2,otf}`],
    },
  },
  video: {
    destination: {
      path: `${app}/assets/videos`,
    },
    source: {
      paths: [`${source}/videos/**/*.{mp4,webm,mkv,flv,ogv,ogg,gif,avi,mov,wmv,mpeg,mpg,mp2,m4v,svi,3gp,3g2}`],
    },
  },
  image: {
    destination: {
      path: `${app}/assets/images`,
    },
    source: {
      paths: [`${source}/images/**/*.{tif,tiff,bmp,jpg,jpeg,gif,png,eps,webp,svg,ico}`],
    },
  },
  release: {
    css: {
      destination: {
        path: `${release}/css`,
      },
      source: {
        paths: [`${app}/assets/css/*.*`],
      },
    },
    js: {
      destination: {
        path: `${release}/js`,
      },
      source: {
        paths: [`${app}/assets/js/*.*`],
      },
    },
    fonts: {
      destination: {
        path: `${release}/fonts`,
      },
      source: {
        paths: [`${app}/assets/fonts/**/*.{eot,svg,ttf,woff,woff2,otf}`],
      },
    },
    images: {
      destination: {
        path: `${release}/images`,
      },
      source: {
        paths: [`${app}/assets/images/**/*.{tif,tiff,bmp,jpg,jpeg,gif,png,eps,webp,svg,ico}`],
      },
    },
    videos: {
      destination: {
        path: `${release}/videos`,
      },
      source: {
        paths: [`${app}/assets/videos/**/*.{mp4,webm,mkv,flv,ogv,ogg,gif,avi,mov,wmv,mpeg,mpg,mp2,m4v,svi,3gp,3g2}`],
      },
    },
  },
};

export default config;
