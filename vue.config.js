const path = require('path')

module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',

	pluginOptions: {
		'style-resources-loader': {
			preProcessor: 'stylus',
			patterns: [
				path.resolve(__dirname, 'src/assets/stylus/_util.styl')
			]
		}
	}
}
