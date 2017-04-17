const path = require("path");
const webpack = require("webpack");

/* paths */
const sourcePath = path.join(__dirname, "src");
const buildPath = path.join(__dirname, "build");

/* config object */
const webpackConfig = {
    /* source and build paths */
    entry: {
        app: sourcePath
    },
    output: {
        path: buildPath,
        filename: "build.js"
    },

    /* loaders */
    module: {
        rules: [
            { 
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(jpg|png|svg)$/,
                loader: "url-loader",
                options: {
                    limits: 200000, // 200 kb file size limit
                }
            },
            {
                test: /\.html$/,
                use: "html-loader"
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: "babel-loader"
            }
        ]
    },

    /* dev server */
    devServer: {
        hot: true,
        host: process.env.HOST, // defaults to localhost
        port: process.env.PORT, // defaults to 8080
        stats: "errors-only",
        historyApiFallback: true,
        overlay: {
            errors: true,
            warnings: true
        }
    },

    /* plugins */
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}

module.exports = function() {
    return webpackConfig;
}
