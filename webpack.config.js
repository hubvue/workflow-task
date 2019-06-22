const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const {resolve} = require("path");
module.exports = {
    output: {
        path: resolve("dist"),
        filename: "scripts/[name]-[hash:5].js"
    },
    devServer: {
        hot:true,
        open:true,
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    // devtool: "source-map",
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            loader: "babel-loader",
            exclude: /(node_modules)/
        },{
            test: /\.css$/,
            use: [{
                loader: MiniCssExtractPlugin.loader,
            },{
                loader: "css-loader",
            },{
                loader: "postcss-loader"
            }]
        }]
    },
    optimization: {
        runtimeChunk: {
            name: "runtime",
        },
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                common: {
                    minChunks: 2,
                    name: 'commons',
                    chunks: 'async',
                    priority: 10,
                    reuseExistingChunk: true,
                    enforce: true,
                }
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./index.html",
            minify: {
                collapseWhitespace: true,
                processConditionalComments: true,
                removeAttributeQuotes: true,
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "styles/[name]-[hash:5].css",
            chunkFilename: "styles/[id]-[hash:5].css"
        }),
        new webpack.HotModuleReplacementPlugin(),
    ]
}