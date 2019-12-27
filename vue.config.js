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
				"@assets": path.resolve(__dirname, 'src/assets'),
				"@images": path.resolve(__dirname, 'src/assets/images'),
				"@stylus": path.resolve(__dirname, 'src/assets/stylus'),
				"@svgs": path.resolve(__dirname, 'src/assets/svgs'),
				"@components": path.resolve(__dirname, 'src/components'),
				"@lib": path.resolve(__dirname, 'src/lib'),
				"@sections": path.resolve(__dirname, 'src/sections'),
				"@templates": path.resolve(__dirname, 'src/templates'),
				"@views": path.resolve(__dirname, 'src/views'),
			}
		}
	}
}
