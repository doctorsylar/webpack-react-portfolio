const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'docs')
    },
    devtool: "source-map ",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: [
                    path.resolve(__dirname, "src"),
                ],
                loader: 'babel-loader',
                query: {
                    plugins: ['transform-class-properties'],
                    presets: ['env', 'react'],
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: "html-loader",
                    options: {
                        minimize: true
                    }
                }
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'img/[name].[ext]'
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
};