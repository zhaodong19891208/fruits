// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/css/reset.css'
import '@/assets/css/border.css'
import '@/assets/iconfont/iconfont.css'
import '@/assets/animate/animate.css'
import FastClick from 'fastclick'

import store from "./store"
import '../node_modules/swiper/dist/css/swiper.min.css'
import '../static/fonts-awesome/css/font-awesome.css'

Vue.config.productionTip = false
FastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
