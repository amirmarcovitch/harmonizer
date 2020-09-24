var path = require('path');

module.exports = options => {
	return {
		mode: "development",
		entry: './src/index.tsx',
		output: {
			filename: 'bundle.js',
		},
		module: {
			rules: [
				{
					test: /.tsx?$/,
					exclude: /node_modules/,
					use: "babel-loader",
				},
				{
					test: /.js$/,
					exclude: /node_modules/,
					use: "babel-loader",
				},
			],
		},
		resolve: {
			extensions: [".ts", ".tsx", ".js"],
		},
		devServer: {
			contentBase: path.join(__dirname, 'dist'),
			compress: true,
			port: 8080,
		},
		node: {
			child_process: 'empty',
			fs: 'empty',
		},
	}
}
