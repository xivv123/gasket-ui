import { App, Plugin } from 'vue'
import BuiDatePicker from './src/index.vue'

const BuiDatePickerInstall: Plugin = {
  install(app: App) {
    app.component('gk-date-picker', BuiDatePicker)
  }
}

export default BuiDatePickerInstall
export { BuiDatePicker }
