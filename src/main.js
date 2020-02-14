import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { version } from '../package.json'
import * as Sentry from '@sentry/browser'
import * as Integrations from '@sentry/integrations'
import VuePageTransition from 'vue-page-transition'
import VueModal from 'vue-js-modal'

import '@/sass/globals.scss'
import '@/sass/fonts.scss'

Vue.config.productionTip = false

Vue.use(VuePageTransition)
Vue.use(VueModal, { dynamic: true, injectModalsContainer: true })

Vue.directive('focus', {
  bind(el) {
    el.focus()
  },
  update(el, binding) {
    if (binding.value) el.focus()
  },
})

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  maxBreadcrumbs: 50,
  debug: process.env.NODE_ENV === 'production' ? false : true,
  release: 'sparkboard@' + version,
  integrations: [new Integrations.Vue({ Vue, attachProps: true })],
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
