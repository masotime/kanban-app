'use strict';

var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
function pathTo(rel) {
	return path.resolve(ROOT_PATH, rel);
}

module.exports = {
	entry: pathTo('app/main'),
	output: {
		path: pathTo('build'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.css$/, // all files ending with CSS
				loaders: ['style', 'css'],
				include: pathTo('app')
			}
		]
	},
	plugins: [
		new HtmlwebpackPlugin({
			title: 'Kanban app'
		})
	]
};