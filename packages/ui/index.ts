
import { BuiButton } from 'gasket-ui-components/button'
import { BuiTag } from 'gasket-ui-components/tag'
import { BuiInput } from 'gasket-ui-components/input'
import { BuiDatePicker } from 'gasket-ui-components/date-picker'
import { rightMenu } from 'gasket-ui-components/right-menu'
import { GkSvgDefsFault } from 'gasket-ui-components/svg-defs/fault'

import Components from './components'
import { App } from 'vue'
import 'uno.css'
import './styles/index.scss'

const Installer = {
  install(app: App) {
    Components.forEach(c => app.use(c))
  }
}

export default Installer
export { BuiButton, BuiTag, BuiInput, BuiDatePicker, rightMenu, GkSvgDefsFault }
