const path = require('path')
const webpack = require('webpack')

const venders = ['react', 'react-dom',/*其他库*/]

module.exports = {
    entry: {
        lib: venders
    },
    output: {
        path: path.resolve(__dirname, './public'),
        filename: '[name].js',
        library: '[name]'
    },
    plugins: [
        new webpack.DllPlugin({
            path: 'manifest.json',
            name: '[name]',
            context: __dirname
        })
    ]
}
