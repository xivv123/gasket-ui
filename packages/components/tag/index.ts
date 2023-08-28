import { App, Plugin } from 'vue'
import BuiTag from './src/index.vue'

const BuiTagInstall: Plugin = {
  install(app: App) {
    app.component('gk-tag', BuiTag)
  }
}

export default BuiTagInstall

export { BuiTag }
