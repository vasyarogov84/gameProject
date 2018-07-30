let path = require("path");

module.exports = {
    entry: "./script/app.js",
    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle.js"
    },
    mode: "development",
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }]
    },
    devServer: {
        contentBase: path.join(__dirname,"public")
    }
 
}