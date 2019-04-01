// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
// import 'amfe-flexible'
import 'lib-flexible/flexible.js'
import '@/css/common.less'
import "@/assets/icomoon/style.css"
import '@/css/style.less'
import store from './store/index.js'
const axios = require('axios')

import VueAxios from 'vue-axios'

let axiosInstance = axios.create({
  // baseURL: 'http://119.23.254.95:81',
  baseURL: 'https://www.superid.in',
    transformRequest: function(data) {
      return Qs.stringify(data)
  },
  headers: {'Content-Type': 'application/x-www-form-urlencoded' },
  // withCredentials: true, //开发环境注释掉
  
});
Vue.use(Mint,VueAxios, axiosInstance);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
