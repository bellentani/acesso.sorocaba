import Vue from 'vue'
import App from './App.vue'

// router setup
import router from './routes/router';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')