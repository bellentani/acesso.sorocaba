import Vue from 'vue'
import App from './App.vue'
import router from './routes/router';
import routes from './routes/routes';
import VueAnalytics from 'vue-analytics';
import VueMeta from 'vue-meta';
import VueRouterSitemap from 'vue-router-sitemap';
import path from 'path';

Vue.config.productionTip = false

const isProd = process.env.NODE_ENV === 'production'

const filterConfig = {
  isValid: false,
  rules: [
    /\/example-page/,
    /\*/,
  ],
}

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

const staticSitemap = path.resolve('.', 'sitemap.xml');
new VueRouterSitemap(routes).filterPaths(filterConfig).build('http://example.com').save(staticSitemap);
