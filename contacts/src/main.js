// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Element from 'element-ui'
import VueRouter from 'vue-router'

import All from './router/All'

Vue.use(Element)
Vue.use(VueRouter)

const routes = [
  { path: '/all', component: All }
]

const router = new VueRouter({ //创建路由实例
  routes
})

new Vue({
  router: router,
  el: '#app',
  render: h => h(App)
})
