'use strict'

const gulp = require('gulp')
const browserify = require('browserify')
const babelify = require('babelify')
const source = require('vinyl-source-stream')

const bundle = function (bundler) {
  bundler
    .bundle()
    .pipe(source('build.js'))
    .pipe(gulp.dest('./build/'))
}

gulp.task('browserify', function () {
  const bundler = browserify(['./assets/router.js'], {fullPaths: true})
    .transform(babelify, {presets: ['es2015', 'react', 'stage-0']})
  bundle(bundler)
})

