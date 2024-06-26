import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './registerServiceWorker'
import router from './router.js'


createApp(App)
.use(router)
.mount('#app')
