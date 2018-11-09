const path = require('path')
const webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')
// const MinifyPlugin = require("babel-minify-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const BrotliPlugin = require('brotli-webpack-plugin')
module.exports = env => {
	return {
		entry: {
			vendor: ["react", "react-dom"],
			main: './src/main.js'
		},
		mode: 'production',
		output: {
			filename: '[name]-bundle.js',
			path: path.resolve(__dirname, '../dist'),
			publicPath: '/'
		},
		optimization: {
			splitChunks: {
				cacheGroups: {
					vendor: {
						name: "vendor",
						chunks: "initial",
						minChunks: 2
					}
				}
			}
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
			new MiniCSSExtractPlugin(),
			new OptimizeCSSAssetsPlugin({
				assetNameRegExp: /\.css$/g,
				cssProcessor: require('cssnano'),
				cssProcessorOptions: {discardComments: {removeAll: true}},
				canPrint: true
			}),
			new HTMLWebpackPlugin({
				template: './src/index.html',
				inject: true
			}),
			new webpack.DefinePlugin({
				'process.env': {
					'NODE_ENV': JSON.stringify(env.NODE_ENV)
				}
			}),
			// new MinifyPlugin()
			new UglifyJSPlugin(),
			new CompressionPlugin({
				algorithm: 'gzip'
			}),
			new BrotliPlugin()
		]
	}

};

