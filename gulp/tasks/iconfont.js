var gulp = require('gulp');
var iconfont = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');
var config = require('../config');

gulp.task('iconfont', function () {
    return gulp
        .src([config.src.iconsSvg + '/*.svg'])
        .pipe(iconfontCss({
            fontName: 'wild-icons',
            path: config.src.sassGen + '/temp/_iconfont.scss',
            targetPath: '../../' + config.src.sassGen + '/_icons.scss',
            fontPath: '../fonts/'
        }))
        .pipe(iconfont({
            fontName: 'wild-icons',
            normalize: true,
            fontHeight: 1001
        }))
        .pipe(gulp.dest(config.src.fonts)
        );
});

gulp.task('iconfont:watch', function () {
    gulp.watch(config.src.icons + '/**/*.svg', ['iconfont']);
});
