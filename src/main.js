// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLayLoad from 'vue-lazyload'

/* 中间件*/
Vue.use(VueLayLoad,{
  loading: 'static/loading-svg/loading-bars.svg',
  attempt:3
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
