const gulp = require('gulp')
const browserSync = require('browser-sync').create()
const sass = require('gulp-sass')(require('sass'))
var exec = require('child_process').exec
// exec('start "" "chrome" "http://localhost:3000/src/index.html"') // hardcoded line , was moved

// Static Server + watching scss/html files
function serve() {
  browserSync.init({
    server: './',
    open: false,
  })
  exec('start "chrome" "http://localhost:3000/src/index.html"') // open browser with $/src

  gulp.watch('src/sass/*.scss', buildStyles)
  gulp.watch('src/*.html', browserSync.reload)

//   gulp.watch('src/*.html').on('change', browserSync.reload)
}

// Compile sass into CSS & auto-inject into browsers
function buildStyles() {
  return gulp
    .src('src/sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream())
}

exports.default = serve
