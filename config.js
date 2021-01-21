const port = 1111;
const app = "app";
const source = "source";

let data = {
    prod: process.argv[2] === "p",
    app: app,
    source: source,
    port: port,
    libJs: {
        target: {
            name: "lib.min.js",
            path: `${app}/assets/js`
        },
        source: {
            paths: [
                
            ]
        }
    },
    libCss: {
        target: {
            name: "lib.min.css",
            path: `${app}/assets/css`
        },
        source: {
            paths: [
                
            ]
        }
    },
    js: {
        target: {
            name: "all.min.js",
            path: `${app}/assets/js`
        },
        source: {
            paths: [
                `${source}/js/**/*`
            ]
        }
    },
    scss: {
        target: {
            name: "all.min.css",
            path: `${app}/assets/css`
        },
        source: {
            paths: [
                `${source}/scss/**/*.scss`
            ]
        }
    },
    image: {
        target: {
            path: `${app}/assets/image`
        },
        source: {
            paths: [
                `${source}/image/**/*.{tif,tiff,bmp,jpg,jpeg,gif,png,eps,webp,svg}`
            ]
        }
    },
    video: {
        target: {
            path: `${app}/assets/video`
        },
        source: {
            paths: [
                `${source}/video/**/*.{mp4,webm,mkv,flv,ogv,ogg,gif,avi,mov,wmv,mpeg,mpg,mp2,m4v,svi,3gp,3g2}`
            ]
        }
    },
    font: {
        target: {
            path: `${app}/assets/fonts`
        },
        source: {
            paths: [
                `${source}/fonts/**/*.{eot,svg,ttf,woff,woff2}`
            ]
        }
    },
    template: {
        target: {
            path: `${app}`
        },
        source: {
            paths: [
                `${source}/template/pages/**/*.html`
            ],
            watch: [
                `${source}/template/**/*`
            ]
        }
    }
};

export default data;