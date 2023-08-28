<template>
  <div class="date-picker">
    <input
      class="date-input"
      v-if="!props.range"
      type="date"
      :value="modelValue"
      @input="updateValue($event.target.value)"
    />
    <div v-else class="date-range-picker">
      <input
        class="date-input"
        type="date"
        :value="modelValue[0]"
        @input="updateValue([ $event.target.value, modelValue[1] ])"
      />
      <span class="separator">{{ props.rangeSeparator }}</span>
      <input
        class="date-input"
        type="date"
        :value="modelValue[1]"
        @input="updateValue([ modelValue[0], $event.target.value ])"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, withDefaults, defineProps } from 'vue'

// 定义 props
const props = withDefaults(
  defineProps<{
    modelValue?: string | string[] // v-model 双向绑定的值
    range?: boolean // 是否为日期范围选择器
    rangeSeparator?: string // 日期范围分隔符
  }>(),
  {
    modelValue: '',
    range: false,
    rangeSeparator: '-'
  }
)

// 当输入值改变时，更新 v-model 绑定的值
const updateValue = (value: string | string[]) => {
  props.modelValue = value
}
</script>

<style scoped>
.date-picker {
  display: inline-flex;
  align-items: center;
  font-family: Arial, sans-serif;
}

.date-input {
  border: none;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  margin-right: 10px;
}

.date-range-picker {
  display: flex;
}

.separator {
  margin: 0 8px;
}
</style>