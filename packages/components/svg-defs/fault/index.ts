import { App, Plugin } from 'vue'
import GkSvgDefsFault from './src/index.vue'

const GkSvgDefsFaultInstall: Plugin = {
  install(app: App) {
    app.component('gk-svgdefs-fault', GkSvgDefsFault)
  }
}

export default GkSvgDefsFaultInstall
export { GkSvgDefsFault }
