/*
  tasks.js
  ===========
  defaults wraps generate-assets, watch and server
*/

const gulp = require('gulp')
const mocha = require('gulp-mocha')
const runSequence = require('run-sequence')

gulp.task('default', function (done) {
  runSequence('generate-assets',
    'watch',
    'server', done)
})

gulp.task('generate-assets', function (done) {
  runSequence('clean',
    'sass',
    'sass-documentation',
    'copy-assets',
    'copy-documentation-assets', done)
})

gulp.task('watch', function (done) {
  runSequence('watch-sass',
    'watch-assets', done)
})

gulp.task('test', function () {
  runSequence('generate-assets',
    'mocha')
})

gulp.task('mocha', function () {
  return gulp.src(['test/**/*.js'], { read: false })
    .pipe(mocha({ reporter: 'spec', exit: true }))
    .on('error', console.error)
})
