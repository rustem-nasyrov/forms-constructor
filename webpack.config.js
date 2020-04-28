'use strict';
const path = require('path'),
    webpack = require('webpack'),
    HTMLWebpackPlugin = require('html-webpack-plugin'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'umd',
        libraryExport: 'default',
        globalObject: 'this',
        filename: 'forms-constructor.min.js',
        library: 'FormsConstructor',
    },
    devServer: {
        contentBase: './dist',
        compress: true,
        port: 3000,
        liveReload: true,
    },
    watch: true,
    watchOptions: {
        ignored: /node_modules/,
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
        ],
    },
    plugins: [
        new HTMLWebpackPlugin({
            inject: 'head',
            template: './src/index.html',
            showErrors: true,
        }),
        new MiniCssExtractPlugin({
            filename: 'res/css/forms-constructor.min.css',
        }),
    ],
};
