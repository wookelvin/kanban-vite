import { createApp } from 'vue'
import './styles/index.css'
import App from './App.vue'
import useFontAwesomeLibrary from './config/FontAwesomeConfig'
import router from './router'

createApp(App)
    .component('fa-icon', useFontAwesomeLibrary())
    .use(router)
    .mount('#app')
