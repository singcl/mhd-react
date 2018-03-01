const path = require('path')
const webpack = require('webpack')

module.exports = {
    devtool: 'eval-source-map',
    entry: __dirname + '/src/index.js',
    output: {
        path: path.resolve(__dirname, './public/js'),
        filename: 'bundle.js'
    },
    // externals: {
	// 	'react': 'window.React',
	// 	'react-dom': 'window.ReactDOM'
	// },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
                // .babelrc 替换这里的babel配置
                // query: {
                //     presets: ['react', 'es2015']
                // }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
    plugins: [
		new webpack.DllReferencePlugin({
			context: __dirname,
			manifest: require('./manifest.json'),
		})
	],
    devServer: {
        contentBase: "./public",
        inline: true,
        historyApiFallback: true
    }
}
