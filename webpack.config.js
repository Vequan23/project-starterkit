const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/js/app.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        port: 8001
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            chunks: ['app']
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
          { test: /\.(js)$/, exclude: /node_modules/, loader: 'babel-loader' }
        ]
      },
      resolve: {
          extensions: ['.js']
      }
};
