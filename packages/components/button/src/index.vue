<template>
  <button
    ref="_ref"
    :class="[
      'gk-button',
      `bg-${_color}-500`,
      `hover:bg-${_color}-400`,
      `${roundClass}`,
      'cursor-pointer',
      { 'hover-enlarge': !props.disabled && !props.grayOut },
      { 'gray-out': props.grayOut },
      { 'plain': props.plain },
      { 'circle': props.circle }
    ]"
    :disabled="props.disabled || props.grayOut"
    :style="{ width: _size.width, height: _size.height }"
  >
    <slot></slot>
  </button>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
type ButtonTypes = 'default' | 'primary' | 'success' | 'danger' | 'Warning'
type ButtonSizes = 'large' | 'small' | [string, string]

const props = withDefaults(
  defineProps<{
    loading?: boolean // 是否为加载状态
    disabled?: boolean // 按钮是否为禁用
    round?: boolean // 是否圆角
    type?: ButtonTypes
    color?: string
    grayOut?: boolean // 是否置灰
    size?: ButtonSizes // 按钮的大小
    plain?: boolean // 是否为朴素按钮
    circle?: boolean // 是否为圆形按钮
  }>(),
  {
    loading: false,
    disabled: false,
    type: 'default',
    color: '',
    round: false,
    grayOut: false,
    size: 'large',
    plain: false,
    circle: false
  }
)

const roundClass = computed(() => (props.round ? 'rd-4' : 'rd-1'))
const _ref = ref<HTMLButtonElement>()
const _color = computed(() => {
  return props.type == 'primary'
    ? 'blue'
    : props.type == 'Warning'
    ? 'pink'
    : props.type == 'success'
    ? 'green'
    : props.type == 'danger'
    ? 'red'
    : ''
})

const _size = computed(() => {
  if (Array.isArray(props.size)) {
    return { width: props.size[0], height: props.size[1] }
  } else {
    return props.size === 'large' ? { width: '100px', height: '50px' } : { width: '50px', height: '25px' }
  }
})

defineExpose({
  ref: _ref
})
</script>
<style lang="scss" scoped>
.hover-enlarge:hover {
  transform: scale(1.1);
  transition: transform 0.3s;
}
.gray-out {
  background-color: gray !important;
  cursor: not-allowed;
}
.plain {
  background-color: transparent !important;
  border: 1px solid currentColor;
}
.circle {
  border-radius: 50%;
}
</style>