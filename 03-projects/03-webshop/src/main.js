import { createApp } from 'vue'
import App from './App.vue'
import Toast from 'vue-toast-notification'
import router from './router'

import './assets/main.css'
import 'vue-toast-notification/dist/theme-default.css'

const app = createApp(App)

app.use(router)
app.use(Toast)

app.mount('#app')
