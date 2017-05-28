const webpack = require('webpack');
const path = require("path");

module.exports = function (env) {
    return {
        entry: env.production ? { "ithildin": './index.ts', "ithildin.min": "./index.ts" } : { 'ithildin': './index.ts' },

        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "[name].js"
        },

        devtool: "source-map",

        module: {
            rules: [
            {
                test: /\.tsx?$/,
                use: ["awesome-typescript-loader"],
                exclude: [/node_modules/, /tests/, /\.(spec|e2e)\.ts$/]
            }]
        },

        resolve: {
            extensions: [".ts", ".tsx", ".js"]
        },

        externals: {
            mithril: 'mithril'
        },

        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                include: /\.min\.js$/,
                minimize: true
            })
        ]
    }
};