// gulp base
const { src, dest, series, parallel, watch } = require('gulp');
const { exec } = require('child_process');

// css
const sass = require('gulp-sass');
sass.compiler = require('sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');

// js
const rollup = require('gulp-rollup-lightweight');
const source = require('vinyl-source-stream');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs')
const rollupBabel = require('@rollup/plugin-babel');
const uglify = require('rollup-plugin-uglify');

// various
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();
const newer = require('gulp-newer');
const imagemin = require('gulp-imagemin');

const sitename = 'www.berrydrupal.test';



/*
    Css Tasks
*/
function cssDev() {
  return src("./src/scss/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({
      'outputStyle': 'compressed',
      'precision': 8,
      'includePaths': ['./node_modules']
    }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(dest("./css/"))
    .pipe(dest("./pl/source/css/")) // Pattern Lab
    .pipe(browserSync.stream());

}


function cssProd() {
  return src("./src/scss/*.scss")
    .pipe(sass({
      'outputStyle': 'compressed',
      'precision': 8,
      'includePaths': ['./node_modules']
    }).on('error', sass.logError))
    .pipe(autoprefixer({ grid: 'no-autoplace' }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(dest("./css/"))
    .pipe(dest("./pl/source/css/")) // Pattern Lab
    // .pipe(touch());
}



/*
  JS tasks
*/
function jsDev() {
  return rollup({
    input: './src/js/app.js',
    output: {
      format: 'umd'
    },
    plugins: [
      resolve(),
      commonjs(),
      rollupBabel.babel({ babelHelpers: 'bundled' }),
    ]
  })
  .pipe(source('app.min.js'))
  .pipe(dest('./js/'))
  .pipe(browserSync.stream());
}

function jsProd() {
  return rollup({
    input: './src/js/app.js',
    output: {
      format: 'umd'
    },
    plugins: [
      resolve(),
      commonjs(),
      rollupBabel.babel({ babelHelpers: 'bundled' }),
      uglify.uglify()
    ]
  })
  .pipe(source('app.min.js'))
  .pipe(dest('./js/'))
  .pipe(browserSync.stream());
}



// BrowserSync: init
function browserSyncInit(done) {
  browserSync.init({
      proxy: sitename
  });

  done();
}



// clear Drupal Cache (for template change)
function clearDrupalCache (done) {
    exec('drush cr', (err, stdout, stderr) => {
        console.log(stdout);
    });

    done();
}

// BrowserSync: reload
function browserSyncReload(done) {
  browserSync.reload();
  console.log("reload"),

  done();
}



/*
    Watch files
*/
function watchFiles(done) {
  watch("src/scss/**/*.scss", cssDev);
  watch("src/js/**/*.js", jsDev);
  watch("*.html").on('change', browserSync.reload);
  watch("templates/**/*.twig").on('change', series(clearDrupalCache, browserSync.reload));
  watch("src/images/**/*", images);
}



/*
  Optimize Images
*/
function images() {
    return src("./src/images/**/*")
        .pipe(newer("./images/"))
        .pipe(
            imagemin([
                imagemin.gifsicle({ interlaced: true }),
                imagemin.mozjpeg({ quality: 75, progressive: true }),
                imagemin.optipng({ optimizationLevel: 5 }),
                imagemin.svgo({
                    plugins: [
                        { removeViewBox: true },
                        { cleanupIDs: false }
                    ]
                })
            ])
        )
        .pipe(dest("./images/"));
}




/*
    Compose tasks
*/
const watchTask = series(images, cssDev, jsDev, browserSyncInit, watchFiles);


/*
    Exports public tasks
*/
exports.cssDev = cssDev;
exports.cssProd = cssProd;
exports.jsDev = jsDev;
exports.jsProd = jsProd;
exports.images = images;
exports.watch = watchTask;
exports.default = watchTask;
/*
exports.cleanDist = cleanDist;
exports.build = buildTask;
*/
