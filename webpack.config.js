const path = require('path');
const NodemonPlugin = require('nodemon-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/lib/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'static'),
    },
    plugins: [
        new NodemonPlugin(), // Dong
        new HtmlWebpackPlugin(),
    ],
};
