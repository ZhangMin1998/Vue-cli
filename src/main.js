import { createApp } from 'vue'
import App from './App.vue'
// import router from './router' // .use(router)
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App).use(ElementPlus).mount(document.getElementById('app'))
