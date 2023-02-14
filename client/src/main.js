import { createApp } from 'vue'
import App from './App.vue'
// router
import router from './router'
// css
import './assets/main/style.css'

const app = createApp(App);
app.use(router)
app.mount('#app')

