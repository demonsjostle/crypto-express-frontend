const HtmlWebPackPlugin = require( 'html-webpack-plugin'  );
const path = require( 'path'  );


module.exports = {
		   context: __dirname,
		   entry: './src/index.js',
		output: {
				      path: path.resolve( __dirname, 'dist'  ),
				      filename: 'main.js',
				   
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
						    
				]
				  
		},
		plugins: [
				new HtmlWebPackPlugin({
						template: path.join(__dirname, "src", "index.html"),
				})
				   
		]
		
};
