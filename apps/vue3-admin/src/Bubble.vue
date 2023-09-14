<template>
  <div class="bubble-container" ref="bubbleElement" :style="popperStyles" :class="{ show: showPopper }">
    <div class="bubble-content">
      <slot></slot>
    </div>
    <div class="bubble-arrow" ref="arrowElement" :class="arrowDirection" :style="arrowStyles"></div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, onMounted, onUnmounted, watch, computed } from 'vue';
import { createPopper } from '@popperjs/core';

let props = defineProps({
  targetSelector: String,
  placement: {
    type: String,
    default: 'top',
  },
  arrowDirection: {
    type: String,
    default: 'top',
  },
  arrowPositionLeft: {
    type: Number,
    default: '50',
  },
  arrowPositionTop: {
    type: Number,
    default: '50',
  },
});

let bubbleElement = ref<HTMLElement | null>(null);
let arrowElement = ref<HTMLElement | null>(null);
let popperInstance = null;
let showPopper = false;

let popperStyles = ref({});
let arrowStyles = ref({});

onMounted(() => {
  const targetElement = document.querySelector(props.targetSelector);
  if (bubbleElement.value && targetElement) {
    popperInstance = createPopper(targetElement, bubbleElement.value, {
      placement: props.placement,
      modifiers: [
        { name: 'arrow', options: { element: arrowElement.value, padding: 10 } }, // padding is the distance from the edges of the popper
        { name: 'offset', options: { offset: [0, 10] } },
      ],
    });

    popperStyles.value = popperInstance.state.styles.popper;
    arrowStyles.value = popperInstance.state.styles.arrow;
    showPopper = true;
  }
});

onUnmounted(() => {
  if (popperInstance) {
    popperInstance.destroy();
    popperInstance = null;
  }
});

watch(() => props.targetSelector, () => {
  if (popperInstance) {
    popperInstance.update();
  }
});

let arrowDirection = computed(() => {
  switch (props.placement) {
    case 'top':
      return 'bottom';
    case 'bottom':
      return 'top';
    case 'left':
      return 'right';
    case 'right':
      return 'left';
    default:
      return props.arrowDirection;
  }
});

let arrowPositionLeft = computed(() => {
  if (props.arrowPositionLeft < 10) return 10;
  if (props.arrowPositionLeft > 90) return 90;
  return props.arrowPositionLeft;
});

let arrowPositionTop = computed(() => {
  if (props.arrowPositionTop < 10) return 10;
  if (props.arrowPositionTop > 90) return 90;
  return props.arrowPositionTop;
});

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
  margin: 15px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.bubble-container.show {
  opacity: 1;
}

.bubble-arrow {
  position: absolute;
  width: 12px;
  height: 12px;
  background-color: #fff;
}
</style>