import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
/* eslint-disable no-new */
Vue.use(VueResource)
new Vue({
  el: '#app',
  render: h => h(App)
})
