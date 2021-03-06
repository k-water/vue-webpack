import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
// import VueRouter from 'vue-router'
// import address from './components/address'
/* eslint-disable no-new */
Vue.use(VueResource)
  // Vue.use(VueRouter)
Vue.filter('money', (value, type) => {
  return '￥' + value.toFixed(2) + type
})

// const router = new VueRouter({
//   mode: 'history',
//   base: __dirname,
//   routes: [{
//     path: '/address',
//     component: address
//   }]
// })

new Vue({
  el: '#app',
  render: h => h(App)
})
