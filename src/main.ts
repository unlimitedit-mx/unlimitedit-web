import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/style/main.sass'

createApp(App).use(router).mount('#app')
