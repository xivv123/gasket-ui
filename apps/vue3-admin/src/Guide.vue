<template>
  <div>
    <button class="toggle-button" ref="button" @click="showPopper = !showPopper">Toggle Popper</button>
    <div class="popper-content" ref="popper" v-show="showPopper">
      Hello Popper!
      <div class="popper-arrow" ref="arrow"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { createPopper } from '@popperjs/core';

let showPopper = ref(false);
let button = ref(null);
let popper = ref(null);
let arrow = ref(null);
let popperInstance = null;

onMounted(() => {
  popperInstance = createPopper(button.value, popper.value, {
    placement: 'bottom',
    modifiers: [
      {
        name: 'arrow',
        options: {
          element: arrow.value,
        },
      },
    ],
  });
});

onUnmounted(() => {
  if (popperInstance) {
    popperInstance.destroy();
    popperInstance = null;
  }
});
</script>

<style scoped>
.toggle-button {
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #007BFF;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s ease;
}

.toggle-button:hover {
  background-color: #0056b3;
}

.popper-content {
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  width: 200px;
  z-index: 100;
  position: relative;
}

.popper-arrow {
  position: absolute;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid #fff;
  bottom: -10px;
  left: calc(50% - 10px);
}
</style>