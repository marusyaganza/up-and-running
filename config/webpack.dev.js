const path = require('path')
const webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')
module.exports = {
	entry: {
		main: [
			"react-hot-loader/patch",
			"babel-runtime/regenerator",
			"babel-register",
			"webpack-hot-middleware/client?reload=true",
			"./src/main.js"
		]
	},
	mode: 'development',
	output: {
		filename: '[name]-bundle.js',
		path: path.resolve(__dirname, '../dist'),
		publicPath: '/'
	},
	devServer: {
		contentBase: 'dist',
		overlay: true,
		stats: {
			colors: true
		},
		hot: true
	},
	module: {
		rules: [
			{
				test: /\.js/,
				use: [
					{
						loader: 'babel-loader'
					}
				],
				exclude: /node_modules/
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'sass-loader'
					}
				]

			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
						options: {
							attrs: ['img:src']
						}
					}
				]
			},
			{
				test: /\.(jpg|gif|png)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'images/[name].[ext]'
						}
					}
				]
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('development')
			}
		}),
		new HTMLWebpackPlugin({
			template: './src/index.html',
			inject: true
		})
	]
}

