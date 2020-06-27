let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let cwd = process.cwd();
let Config = require('./config');

console.log(Config)

module.exports = {
	mode: 'development',
	entry: path.resolve(__dirname, './src/'),
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.(css|less)$/,
				exclude: /node_modules/,
				loader: [
					'style-loader',
					'css-loader',
					'less-loader'
				]
			},
			{
				test: /\.(jpg|png|gif)$/,
				exclude: /node_modules/,
				loader: 'url-loader',
				options: {
					limit: 8192,
					mimeType: 'image/png'
				}
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: cwd + '/index.html',
			filename: 'index.html',
			chunks: []
		}),
	],
	resolve: {
		alias: {
			components: path.resolve(__dirname, './src/components')
		}
	},
	devServer: {
		historyApiFallback: true,
		proxy: {
			'/eleAdmin': 'http://localhost:3000'
		}
	}
}