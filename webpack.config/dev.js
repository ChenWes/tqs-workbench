const path = require('path');
const webpack = require('webpack')
const merge = require('webpack-merge')
const HTMLWebpackPlugin = require('html-webpack-plugin');

const baseConfig = require('./base');
const root = path.resolve(__dirname, '../');

module.exports = merge.smart(baseConfig, {
    entry: {
        app: path.join(__dirname, '../src/index.js')
    },
    output: {
        filename: '[name].[hash].js',
        path: path.join(__dirname, '../dist'),
        publicPath: '/'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(root, '../dist'),
        historyApiFallback: true,
        inline: true,
        compress: true,
        port: 8083,
        progress: true,
        hot: true,
        overlay: {
            errors: true
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"',
            },
        }),
        new webpack.HotModuleReplacementPlugin(),
    ]
})