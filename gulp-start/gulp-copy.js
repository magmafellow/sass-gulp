const { src, dest } = require('gulp')


function copy() {
  return src('main.*').pipe(dest('result-directory/'))
}


module.exports.default = copy
