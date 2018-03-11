// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/css/reset.css'
import '@/assets/css/border.css'
import FastClick from 'fastclick'
import config from './moduels/config.js'
Vue.config.productionTip = false
FastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data () {
    return {
      config
    }
  },
  router,
  components: { App },
  template: '<App/>'
})
