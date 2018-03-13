// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false


import axios from 'axios';
let axiosIns = axios.create({
  // 发布
  baseURL:'/',
  // 开发
  baseURL: '/api/',
});
Vue.prototype.$http = axiosIns;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
