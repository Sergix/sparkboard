import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { version } from '../package.json'
import * as Sentry from '@sentry/browser'
import * as Integrations from '@sentry/integrations'
import VuePageTransition from 'vue-page-transition'

import '@/sass/globals.scss'
import '@/sass/fonts.scss'

Vue.config.productionTip = false

Vue.use(VuePageTransition)

Sentry.init({
  dsn: 'https://ce5b907a4c294be1be5793b281daa9cc@sentry.io/1869953',
  maxBreadcrumbs: 50,
  debug: process.env.NODE_ENV === 'production' ? false : true,
  release: 'sparkboard@' + version,
  integrations: [new Integrations.Vue(Vue, { attachProps: true })],
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
