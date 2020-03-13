'use strict';
const path = require('path'),
    config = require('./package.json'),
    webpack = require('webpack');

require('dotenv').config();

const PROD = process.env.NODE_ENV === 'production';

module.exports = {
    entry: path.resolve(__dirname, config.main),
    devtool: 'source-map',
    optimization: {
        minimize: false,
    },
    mode: process.env.NODE_ENV,
    output: {
        path: path.resolve('C:/ws/www/ws5/lib/formsconstructor', './'),
        filename: PROD ? 'formsConstructor.min.js' : 'formsConstructor.js',
        library: process.env.NAME,
        libraryExport: 'default',
        libraryTarget: process.env.TARGET,
        globalObject: 'this',
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000,
    },
    module: {
        rules: [{ test: /\.js?$/, exclude: /node_modules/, use: ['babel-loader'] }],
    },
};
