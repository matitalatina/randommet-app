'use strict';
var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');

var useref = require('gulp-useref'),
  uglify = require('gulp-uglify'),
  clean = require('gulp-clean'),
  gulpif = require('gulp-if'),
  minifyHTML = require('gulp-minify-html'),
  imagemin = require('gulp-imagemin'),
  ngAnnotate = require('gulp-ng-annotate'),
  sh = require('shelljs'),
  jshint = require('gulp-jshint'),
  manifest = require('gulp-manifest');

var paths = {
  app: {
    root: 'www',
    images: 'www/img/**/*',
    fonts: 'www/fonts/**/*',
    resources: 'www/resources/**/*',
    templates: ['www/js/**/*.html', 'www/templates/**/*.html']
  },
  dist: {
    root: 'dist',
    fonts: 'dist/fonts/',
    images: 'dist/img/',
    resources: 'dist/resources/'
  },
  sass: ['./scss/**/*.scss'],
};

gulp.task('default', ['sass']);

gulp.task('sass', function (done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('watch', function () {
  gulp.watch(paths.sass, ['sass']);
});

gulp.task('install', ['git-check'], function () {
  return bower.commands.install()
    .on('log', function (data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('lint', function () {
  return gulp.src(paths.app.root + '/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});


gulp.task('build', ['clean', 'sass', 'build:merge', 'build:templates', 'build:images', 'build:fonts', 'build:manifest', 'build:resources']);

gulp.task('build:merge', ['clean', 'sass'], function () {
  var assets = useref.assets();

  return gulp.src(paths.app.root + '/*.html')
    .pipe(assets)
    .pipe(gulpif('*.js', ngAnnotate()))
    .pipe(gulpif('*.js', uglify()))
    .pipe(gulpif('*.css', minifyCss()))
    .pipe(assets.restore())
    .pipe(useref())
    .pipe(gulp.dest(paths.dist.root));
});


gulp.task('build:resources', ['clean'], function () {
  return gulp.src(paths.app.resources)
    .pipe(gulp.dest(paths.dist.resources));
});

gulp.task('build:fonts', ['clean'], function () {
  return gulp.src(paths.app.fonts)
    .pipe(gulp.dest(paths.dist.fonts));
});

gulp.task('build:templates', ['clean'], function () {
  return gulp.src(paths.app.templates, {
      base: paths.app.root
    })
    .pipe(minifyHTML())
    .pipe(gulp.dest(paths.dist.root));
});

gulp.task('build:images', ['clean'], function () {
  return gulp.src(paths.app.images)
    .pipe(imagemin())
    .pipe(gulp.dest(paths.dist.images));
});

gulp.task('build:manifest', ['clean', 'sass', 'build:merge', 'build:templates', 'build:images', 'build:fonts'], function () {
  return gulp.src(paths.dist.root + '/**/*')
    .pipe(manifest({
      //hash: true,
      //preferOnline: true,
      timestamp: true,
      //network: ['http://' + urls.backend, 'https://' + urls.backend],
      network: ['*'],
      fallback: [
        'fonts/FontAwesome.otf fonts/FontAwesome.otf',
        'fonts/fontawesome-webfont.eot fonts/fontawesome-webfont.eot',
        'fonts/fontawesome-webfont.svg fonts/fontawesome-webfont.svg',
        'fonts/fontawesome-webfont.ttf fonts/fontawesome-webfont.ttf',
        'fonts/fontawesome-webfont.woff fonts/fontawesome-webfont.woff',
        'fonts/fontawesome-webfont.woff2 fonts/fontawesome-webfont.woff2',
        'fonts/ionicons.eot fonts/ionicons.eot',
        'fonts/ionicons.svg fonts/ionicons.svg',
        'fonts/ionicons.ttf fonts/ionicons.ttf',
        'fonts/ionicons.woff fonts/ionicons.woff'
      ],
      filename: 'cache.appcache',
      exclude: 'cache.appcache'
    }))
    .pipe(gulp.dest(paths.dist.root));
});

gulp.task('clean', function () {
  return gulp.src(paths.dist.root + '/*', {
      read: false
    })
    .pipe(clean());
});

gulp.task('git-check', function (done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});