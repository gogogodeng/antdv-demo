import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/dxc.css'
import data from './assets/js/data.js'

createApp(App).use(store).use(router).mount('#app')

document.title = data.webinfo.webtitle
