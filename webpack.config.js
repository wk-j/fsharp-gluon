var webpack = require('webpack');
var path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: "./GluonWeb.Client/main.ts",
        vendor: [
            "core-js",
            "jquery",
            "gluon-client"
        ]
    },
    output: {
        filename: "./GluonWeb/www/dist/bundle.js",
    },
    devtool: 'source-map',
    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".js"],
    },
    module: {
        rules: [{
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: "ts-loader"
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ name: "vendor", filename: "./GluonWeb/www/dist/vendor.bundle.js" }),
        /*
        new HtmlWebpackPlugin({
          title: "Web",
          filename: "dist/index.html",
          template: "GluonWeb.Client/index.html",
        })
        */
    ]
};