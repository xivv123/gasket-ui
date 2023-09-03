import { createApp } from 'vue'
import App from './App.vue'
import gk from 'gasket-ui'
import "gasket-ui/dist/index.css"
// import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
createApp(App).use(gk).use(ElementPlus).mount('#app')
