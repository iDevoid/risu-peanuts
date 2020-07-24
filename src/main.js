import Vue from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import vuetify from './plugins/vuetify';
import './registerServiceWorker'
import VueCookie from 'vue-cookie'
import VueMasonry from 'vue-masonry-css'

Vue.use(VueMasonry)
Vue.use(VueCookie)
Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  vuetify,
  render: h => h(App)
}).$mount('#app')
