import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
// router
import router from './router'
// css
import './assets/main/style.css'

const app = createApp(App).use(createPinia());
app.use(router)
app.mount('#app')

