import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
/* eslint-disable no-new */
Vue.use(VueResource)
Vue.filter('money', (value, type) => {
  return '￥' + value.toFixed(2) + type
})
new Vue({
  el: '#app',
  render: h => h(App)
})
