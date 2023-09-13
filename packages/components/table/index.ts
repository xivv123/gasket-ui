import { App, Plugin } from 'vue'
import GkTable from './src/index.vue'

const GkTableInstall: Plugin = {
  install(app: App) {
    app.component('gk-table', GkTable)
  }
}

export default GkTableInstall
export { GkTable }
