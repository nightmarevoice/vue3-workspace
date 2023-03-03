import { createApp } from 'vue'
import App from './App.vue'
import './global.scss'
import 'amfe-flexible'
import echarts from '@/utils/echarts'
import router from './router'
import store from '@/store/index'
const app = createApp(App)
app.use(router).use(store);
app.mount('#app')
app.provide('$echarts', echarts);