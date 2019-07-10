import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
Vue.prototype.$axios = axios;
import './assets/js/flexble.js'
Vue.config.productionTip = false
import "./module/module"
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
