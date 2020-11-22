import Vue from 'vue'
import App from './App.vue'
import '@/scss/main.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faGavel, faCubes } from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faEnvelope)
library.add(faGavel)
library.add(faCubes)
library.add(faYoutube)
library.add(faGithub)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
