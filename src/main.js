import '@stylus/main.styl'

import Axios from 'axios';
import Vue from 'vue'
import { App } from '@/app'
import router from '@/router'

Vue.config.productionTip = false

Vue.prototype.$eventbus = new Vue();
Vue.prototype.$axios = Axios.create({
	baseURL: `${process.env.VUE_APP_API_ROUTE}/api`
})

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
