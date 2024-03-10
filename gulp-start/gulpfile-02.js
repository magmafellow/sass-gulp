const { series } = require('gulp')

// private
function clean(cb) {
  // body
  cb()
}

// public
function build(cb) {
  // body
  cb()
}

module.exports.build = build
module.exports.default = series(clean, build)
