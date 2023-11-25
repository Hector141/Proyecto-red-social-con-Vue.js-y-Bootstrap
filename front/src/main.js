import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import store from './store' 
import router from './router'
import '@/assets/bootstrap.min.css'
import '@/assets/bootstrap.bundle.min.js'
import '@/assets/customstyles.css'
import 'material-icons/iconfont/material-icons.css'

const app = createApp(App)

app.use(router)
app.use(store) 
app.mount('#app')
