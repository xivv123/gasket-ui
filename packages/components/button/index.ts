import { App, Plugin } from 'vue'
import BuiButton from './src/index.vue'

const BuiButtonInstall: Plugin = {
  install(app: App) {
    app.component('gk-button', BuiButton)
  }
}

export default BuiButtonInstall
export { BuiButton }
