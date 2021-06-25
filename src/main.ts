import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { VueWindowSizePlugin } from 'vue-window-size/option-api'
import './assets/tailwind.css'

createApp(App)
  .use(store)
  .use(router)
  .use(VueWindowSizePlugin)
  .mount('#app')
