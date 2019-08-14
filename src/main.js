import Vue from 'vue'
import App from './App.vue'
import router from './routes/router';
import VueAnalytics from 'vue-analytics';
import VueMeta from 'vue-meta';

Vue.config.productionTip = false

const isProd = process.env.NODE_ENV === 'production'

Vue.use(VueAnalytics , {
  id: 'UA-145591386-1',
  router,
  debug: {
    enabled: !isProd,
    sendHitTask: isProd
  }
})

Vue.use(VueMeta, {
  // optional pluginOptions
  refreshOnceOnNavigation: true
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
