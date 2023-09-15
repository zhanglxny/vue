import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import '@/mock/index'
import vantHelper from '@/utils/vantHelper'
import SvgIcon from "@/components/SvgIcon.vue"
import 'virtual:svg-icons-register'


const app = createApp(App)

app.use(createPinia())
app.use(router)

vantHelper(app)
app.component('svg-icon', SvgIcon)

app.mount('#app')
