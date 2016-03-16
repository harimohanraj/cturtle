var config = {
	entry: __dirname + '/src/index.js',
	devtool: 'source-map',
	output: {
		library: 'cturtle',
		libraryTarget: 'umd',
		path: __dirname + '/dist',
		filename: 'cturtle.js'
	},
	module: {
		loaders: [
		  {
		    test: /\.js$/,
		    loader: 'babel',
		    exclude: /(node_modules)/
		  },
		]
	}
}

module.exports = config
