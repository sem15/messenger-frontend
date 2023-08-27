import { createApp } from 'vue'
import App from './App.vue'
import store from './vuex/vuex.js'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons'
import { faHashtag } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret)
library.add(faVolumeHigh)
library.add(faHashtag)
library.add(faUser)


createApp(App)
.use(store)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
