'use strict';

var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');

/* [END] stuff to allow multiple targets */

var ROOT_PATH = path.resolve(__dirname);
function pathTo(rel) {
	return path.resolve(ROOT_PATH, rel);
}

var common = {
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

/* stuff to allow multiple targets */
(function targetSwitching(module, base) {
	var merge = require('webpack-merge');
	var TARGET = process.env.TARGET;

	if (TARGET === 'dev') {
		module.exports = merge(base, {
			devtool: 'eval' // this adds sourcemaps apparently
		});
	}
}(module, common));

