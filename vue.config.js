const path = require('path')

module.exports = {
	publicPath: "/",
	pluginOptions: {
		'style-resources-loader': {
			preProcessor: 'stylus',
			patterns: [
				path.resolve(__dirname, 'src/assets/stylus/_util.styl'),
			]
		}
	},
	configureWebpack: {
		resolve: {
			alias: {
				"@images": path.resolve(__dirname, 'src/assets/images'),
				"@stylus": path.resolve(__dirname, 'src/assets/stylus'),
				"@svgs": path.resolve(__dirname, 'src/assets/svgs'),
				"@components": path.resolve(__dirname, 'src/components'),
				"@sections": path.resolve(__dirname, 'src/sections'),
				"@views": path.resolve(__dirname, 'src/views'),
				"@templates": path.resolve(__dirname, 'src/templates')
			}
		}
	}
}
