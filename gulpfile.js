'use strict';

const {
    src,
    dest,
    series,
    parallel,
    watch
} = require('gulp'),
    compiler = require('webpack'),
    autoprefixer = require('gulp-autoprefixer'),
    webpack = require('webpack-stream'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    imagemin = require('gulp-imagemin');

const path = {
    src: {
        base: './src/**/*.js',
        css: './src/resources/styles/**/*.{css,scss,css}',
        img: './src/resources/images/**/*.*',
    },
    dist: {
        base: 'C:/ws/www/ws5/lib/formsconstructor',
        css: 'C:/ws/www/ws5/lib/formsconstructor/res/css',
        img: 'C:/ws/www/ws5/lib/formsconstructor/res/img',
    },
};

const base = () => {
    return src(path.src.base)
        .pipe(webpack({
            output: {
                filename: 'formsConstructor.min.js',
                library: 'FormsConstructor',
            },
            devtool: 'source-map',
            mode: 'production',
            optimization: {
                minimize: true,
            },
            module: {
                rules: [{
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: ['babel-loader'],
                }],
            },
        }, compiler, (err, stats) => err ? console.log(err) : ''))
        .pipe(dest(path.dist.base));
}

const css = cb => {
    return src(path.src.css)
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed',
        }).on('error', (error) => cb(error.message)))
        .pipe(autoprefixer({
            cascade: false,
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(dest(path.dist.css))
}

const img = () => {
    return src(path.src.img)
        .pipe(imagemin())
        .pipe(dest(path.dist.img));
}

const watcher = () => {
    watch(path.src.base, base, base);
    watch(path.src.css, css, css);
    watch(path.src.img, img, img);
}

exports.default = series(parallel(base, css, img), watcher);