const path = require('path');
// plugins
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].[contenthash].js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.jsx', '.js']
    },
    devtool: 'eval',
    plugins: [
        new CleanWebpackPlugin(),
        new BundleAnalyzerPlugin(),
        new HtmlWebpackPlugin({
            template: __dirname + '/src/index.html',
            filename: 'index.html',
            inject: 'body'
        })
        
    ],
    module: {
        // loaders
        rules: [
            {
                test: /\.jsx?$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'babel-loader'
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/,
                include: path.resolve(__dirname, 'src/assets'),
                loader:'file-loader',
                options: {
                    outputPath: 'assets/img',
                    name: '[name].[ext]',
                    esModule: false
                }
            }
        ]
    }
}