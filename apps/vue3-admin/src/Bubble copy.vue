<template>
  <div class="bubble-container" :style="{ left: `${position.x}px`, top: `${position.y}px`, boxShadow: shadow }">
    <div class="bubble-content">
      <slot></slot>
    </div>
    <div class="bubble-arrow" :style="{ left: `calc(${tipPosition}% - 10px)` }"></div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, toRefs } from 'vue';

interface Position {
  x: number;
  y: number;
}

let props = defineProps({
  position: {
    type: Object as () => Position,
    required: true,
  },
  shadow: {
    type: String,
    default: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
  tipPosition: {
    type: Number,
    default: 50,
  },
});

let { position } = toRefs(props);
console.log(position.value)
</script>

<style scoped>
.bubble-container {
  position: absolute;
  z-index: 1000;
  width: max-content;
  max-width: 200px;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.bubble-arrow {
  position: absolute;
  bottom: -7px;
  left: 50%;
  width: 12px;
  height: 12px;
  background-color: #fff;
  transform: rotate(45deg);
  border-right: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
}
</style>