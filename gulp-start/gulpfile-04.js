const { parallel, series } = require('gulp')
const fs = require('fs')

async function asyncAwaitTask() {
  const { version } = JSON.parse(fs.readFileSync('package.json', 'utf8'))
  console.log(version)
  // await Promise.resolve('some result')
}

async function asyncAwaitTask2() {
  const { author } = JSON.parse(fs.readFileSync('package.json', 'utf8'))
  console.log(author)
  await Promise.resolve('some result')
}
async function asyncAwaitTask3() {
  const { main } = JSON.parse(fs.readFileSync('package.json', 'utf8'))
  console.log(main)
  // await Promise.resolve('some result')
}
async function asyncAwaitTask4() {
  const { devDependencies } = JSON.parse(fs.readFileSync('package.json', 'utf8'))
  console.log(devDependencies)
  await Promise.resolve('some result')
}

exports.default = parallel(asyncAwaitTask, asyncAwaitTask2, asyncAwaitTask3, asyncAwaitTask4, asyncAwaitTask, asyncAwaitTask2, asyncAwaitTask3, asyncAwaitTask4, asyncAwaitTask, asyncAwaitTask2, asyncAwaitTask3, asyncAwaitTask4)
exports.ser = series(asyncAwaitTask, asyncAwaitTask2, asyncAwaitTask3, asyncAwaitTask4, asyncAwaitTask, asyncAwaitTask2, asyncAwaitTask3, asyncAwaitTask4, asyncAwaitTask, asyncAwaitTask2, asyncAwaitTask3, asyncAwaitTask4)
