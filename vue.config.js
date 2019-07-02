const path = require('path')

module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',

	pluginOptions: {
		'style-resources-loader': {
			preProcessor: 'stylus',
			patterns: [
				'/Projetos/SITE/_frameworks/base_vue_2019/src/assets/stylus/_util.styl'
			]
		}
	}
}
