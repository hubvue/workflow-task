const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
module.exports = {
    devServer: {
        hot:true,
        open:true,
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devtool: "source-map",
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
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./index.html"
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "styles/[name].css",
            chunkFilename: "styles/[id].css"
        }),
        new webpack.HotModuleReplacementPlugin(),
    ]
}