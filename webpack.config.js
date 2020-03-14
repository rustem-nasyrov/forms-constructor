'use strict';
const path = require('path'),
    config = require('./package.json'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin');

require('dotenv').config();

const PROD = process.env.NODE_ENV === 'production';

module.exports = {
    entry: path.resolve(__dirname, config.main),
    devtool: 'source-map',
    optimization: {
        minimize: false,
    },
    mode: process.env.NODE_ENV,
    watch: true,
    watchOptions: {
        ignored: /node_modules/,
    },
    output: {
        path: path.resolve('C:/ws/www/ws5/lib/formsconstructor', './'),
        filename: PROD ? `${process.env.NAME}.min.js` : `${process.env.NAME}.js`,
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
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // 'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'res/img',
                },
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: `./res/css/${process.env.NAME}.min.css`,
        }),
    ],
};
