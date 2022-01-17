const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');


module.exports = {
	context: __dirname,
	entry: './src/Routes/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',

	},
	module: {
		rules: [
			{
				test: /\.?js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react']
					}
				}
			},
			{
				test: /\.(jpe?g|gif|png|ico)$/,
			  use: ['file-loader?name=[name].[ext]']
						  
			},

		]

	},
	devServer: {
		historyApiFallback: true
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: "./public/index.html",
		})

	]

};
