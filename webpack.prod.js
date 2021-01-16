const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MinifyPlugin = require("babel-minify-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    mode: 'production',
    optimization: {
        minimizer: [new OptimizeCssAssetsPlugin()]
    },
    entry: {
        index: "./src/index.js",
    },
    output: {
        filename: "js/pages/[name].[contentHash].js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.css$/,
                exclude: /styles\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },

            {
                test: /styles\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },

            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    minimize: true,
                    attributes: false
                }
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false
                        }
                    }]
            }
        ]
    },

    plugins: [
        new HtmlWebPackPlugin({
            template: 'src/html/index.html',
            filename: './index.html',
            chunks: ["index"]
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/css/static', to: 'css/' },
            ],
        }),
        new MinifyPlugin(),

    ],
}