import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import router from "@/presentation/router/index.ts";

createApp(App)
    .use(router)
    .mount('#app')
