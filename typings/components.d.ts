// For this project development
import '@vue/runtime-core'

declare module '@vue/runtime-core' {
  // GlobalComponents for Volar
  export interface GlobalComponents {
    // ElAffix: typeof import('../packages/element-plus')['ElAffix']
    
  }

  interface ComponentCustomProperties {
    // $message: typeof import('../packages/element-plus')['ElMessage']
    // $notify: typeof import('../packages/element-plus')['ElNotification']
    // $msgbox: typeof import('../packages/element-plus')['ElMessageBox']
    // $messageBox: typeof import('../packages/element-plus')['ElMessageBox']
    // $alert: typeof import('../packages/element-plus')['ElMessageBox']['alert']
    // $confirm: typeof import('../packages/element-plus')['ElMessageBox']['confirm']
    // $prompt: typeof import('../packages/element-plus')['ElMessageBox']['prompt']
    // $loading: typeof import('../packages/element-plus')['ElLoadingService']
  }
}

export {}
