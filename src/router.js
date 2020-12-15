import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let routes = [
	{
		path: '/',
		name: 'home',
		component: () => import( /* webpackChunkName: "home" */ './views/Home/Home.vue')
	},
]

let router = new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

export default router