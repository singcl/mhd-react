const webpack = require('webpack')
const path = require('path')

module.exports = {
    devtool: 'eval-source-map',
    entry: path.resolve(__dirname, './app/mock.js'),
    output: {
        path: path.resolve(__dirname , './public'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader:'babel-loader',
            query: {
                presets: ['es2015']
            }
        }]
    },
    plugins: [
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./manifest.json')
        })
    ],
    devServer: {
        contentBase: "./public",
        inline: true,
        port: 8020,
        historyApiFallback: true
    }
}
