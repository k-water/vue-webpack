// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Element from 'element-ui'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Home from './router/Home'

Vue.use(Element)
Vue.use(VueRouter)
Vue.use(VueResource)
const routes = [
  { path: '/', component: Home }
]

const router = new VueRouter({ //创建路由实例
  routes
})

new Vue({
  router: router,
  el: '#app',
  render: h => h(App)
})
