const path = require('path')
const webpack = require('webpack')

/*其他库*/
const venders = ['react', 'react-dom']

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
