import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/style/main.sass'

import '@fortawesome/fontawesome-free/scss/brands.scss'
import '@fortawesome/fontawesome-free/scss/regular.scss'
import '@fortawesome/fontawesome-free/scss/solid.scss'
import '@fortawesome/fontawesome-free/scss/fontawesome.scss'

createApp(App).use(router).mount('#app')
