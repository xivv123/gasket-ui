import { App, Plugin } from 'vue'
import BuiInput from './src/index.vue'

const BuiInputInstall: Plugin = {
  install(app: App) {
    app.component('gk-input', BuiInput)
  }
}

export default BuiInputInstall
export { BuiInput }
