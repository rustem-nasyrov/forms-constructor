'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  watch: false,
  watchOptions: {
    ignored: /node_modules/,
  },
  devServer: {
    publicPath: '/',
    contentBase: path.join(__dirname, 'dist'),
    compress: false,
    port: 3000,
  },
  output: {
    filename: 'FormsConstructor.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'FormsConstructor',
    libraryTarget: 'var',
    libraryExport: 'default',
    globalObject: 'this',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: 'body',
      templateContent: `
          <html>
              <head>
                  <title>Forms Constructor</title>
              </head>
              <body>
                  <div id="app"></div>
              </body>
          </html>
      `,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      // Utils
      Utils: path.resolve(__dirname, 'src/Utils'),
      // Components
      Components: path.resolve(__dirname, 'src/components'),
      Button: path.resolve(__dirname,'src/components/Button'),
      Combo: path.resolve(__dirname,'src/components/Combo'),
      Field: path.resolve(__dirname,'src/components/Field'),
      Fieldset: path.resolve(__dirname,'src/components/Fieldset'),
      Form: path.resolve(__dirname,'src/components/Form'),
      Label: path.resolve(__dirname,'src/components/Label'),
    },
  },
};
