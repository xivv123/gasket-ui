
<script setup lang="ts">
import { ref } from 'vue'
import DatePicker from './DatePicker.vue'

const selectedDate = ref('')
const datePickerRef = ref()

const focusDatePicker = () => {
  datePickerRef.value?.focus()
}
</script>

<template>
  <div>
    <bui-button>Default</bui-button>
    <bui-button color="yellow">Primary</bui-button>
    <bui-button type="primary" circle :round="true">Primary</bui-button>
    <bui-button type="Warning">Success</bui-button>
    <bui-button type="danger">Danger</bui-button>
    <bui-button type="danger">Danger</bui-button>
    <bui-button type="success" >Danger</bui-button>
    <bui-button type="yellow" size="large">222</bui-button>
    <bui-button type="Warning" size="small">222</bui-button>
    <bui-button type="Warning" size="small">222</bui-button>
    <bui-button type="yellow" plain :size="['200px', '300px']">222</bui-button>
  </div>
1
  <bui-date-picker v-model="selectedDate" ref="datePickerRef" />
  <bui-input v-model="selectedDate" color="blue" shake="true" textColor="red" ref="datePickerRef" />
  <br />
  <bui-input v-model="selectedDate"  color="red"  textColor="yellow" ref="datePickerRef" />
  <br />

  <bui-input v-model="selectedDate" color="yellow" ref="datePickerRef" />
  <br />

  <bui-input v-model="selectedDate" shake="true" type="florid" ref="datePickerRef" />
  <bui-input v-model="selectedDate" shake="true" type="florid" ref="datePickerRef" />
  <br />

</template>

<style scoped></style>
