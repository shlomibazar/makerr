import { createApp } from 'vue'
import { router } from './router.js'
import { store } from './store/store.js'
import './assets/styles/main.scss'
import rootCmp from './root-cmp.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(rootCmp)
app.use(router)
app.use(store)
app.use(ElementPlus)

app.mount('#app')
