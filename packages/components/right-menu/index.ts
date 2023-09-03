import { App, Plugin } from 'vue'
import rightMenu from './src/index.vue'

const RightMenuInstall: Plugin = {
  install(app: App) {
    app.component('gk-right-menu', rightMenu)
  }
}

export default RightMenuInstall
export { rightMenu }
