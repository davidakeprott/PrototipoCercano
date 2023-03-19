import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

import './assets/main.css'


axios.defaults.baseURL='https://localhost:7051/Usuario';
axios.defaults.headers.common['Authorization']=localStorage.getItem('token');
const app = createApp(App)

app.use(router)

app.mount('#app')
