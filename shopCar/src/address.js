import Vue from 'vue'
import Address from './components/address'
import VueResource from 'vue-resource'
// import VueRouter from 'vue-router'
// import address from './components/address'
/* eslint-disable no-new */
Vue.use(VueResource)
  // Vue.use(VueRouter)
Vue.filter('money', (value, type) => {
  return '￥' + value.toFixed(2) + type
})

new Vue({
  el: '#app',
  render: h => h(Address)
})
