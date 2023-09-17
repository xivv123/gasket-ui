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

<style scoped lang="scss">
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
  position: absolute;
  word-wrap: break-word;
  visibility: visible;
}

.popper-arrow {
  position: absolute;
  width: 10px;
  height: 10px;
  bottom: -5px;
  z-index: -1;
}

.popper-arrow::before {
  content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  z-index: -1;
  background-color: #fff;
  transform: rotate(45deg);
  box-sizing: border-box;
  border: 1px solid #dcdfe6;
  // background: #ffffff;
  right: 0;
}
.popper {
  position: absolute;
  border-radius: var(--popper-border-radius);
  padding: 5px 11px;
  z-index: 2000;
  font-size: 12px;
  line-height: 20px;
  min-width: 10px;
  word-wrap: break-word;
  visibility: visible;
}

.popper.dark {
  color: var(--bg-color);
  background: var(--text-color-primary);
  border: 1px solid var(--text-color-primary);
}

.popper.dark .popper-arrow::before {
  border: 1px solid var(--text-color-primary);
  background: var(--text-color-primary);
  right: 0;
}

.popper.light {
  background: var(--bg-color-overlay);
  border: 1px solid var(--border-color-light);
}

.popper.light .popper-arrow::before {
  border: 1px solid var(--border-color-light);
  background: var(--bg-color-overlay);
  right: 0;
}

.popper.pure {
  padding: 0;
}

.popper-arrow {
  position: absolute;
  width: 10px;
  height: 10px;
  z-index: -1;
}

// .popper-arrow::before {
//   position: absolute;
//   width: 10px;
//   height: 10px;
//   z-index: -1;
//   content: ' ';
//   transform: rotate(45deg);
//   background: var(--text-color-primary);
//   box-sizing: border-box;
// }

.popper[data-popper-placement^='top'] > .popper-arrow {
  bottom: -5px;
}

.popper[data-popper-placement^='top'] > .popper-arrow::before {
  border-bottom-right-radius: 2px;
}

.popper[data-popper-placement^='bottom'] > .popper-arrow {
  top: -5px;
}

.popper[data-popper-placement^='bottom'] > .popper-arrow::before {
  border-top-left-radius: 2px;
}

.popper[data-popper-placement^='left'] > .popper-arrow {
  right: -5px;
}

.popper[data-popper-placement^='left'] > .popper-arrow::before {
  border-top-right-radius: 2px;
}

.popper[data-popper-placement^='right'] > .popper-arrow {
  left: -5px;
}

.popper[data-popper-placement^='right'] > .popper-arrow::before {
  border-bottom-left-radius: 2px;
}

.popper[data-popper-placement^='top'] .popper-arrow::before {
  border-top-color: transparent !important;
  border-left-color: transparent !important;
}

.popper[data-popper-placement^='bottom'] .popper-arrow::before {
  border-bottom-color: transparent !important;
  border-right-color: transparent !important;
}

.popper[data-popper-placement^='left'] .popper-arrow::before {
  border-bottom-color: transparent !important;
  border-left-color: transparent !important;
}

.popper[data-popper-placement^='right'] .popper-arrow::before {
  border-top-color: transparent !important;
  border-right-color: transparent !important;
}
</style>