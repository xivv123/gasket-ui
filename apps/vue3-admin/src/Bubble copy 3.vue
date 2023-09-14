<template>
  <div class="bubble-container" ref="bubbleElement" :style="{ left: `${position?.x}px`, top: `${position?.y}px`, boxShadow: shadow }">
    <div class="bubble-content">
      <slot></slot>
    </div>
    <div class="bubble-arrow" :class="arrowDirection" :style="arrowPosition"></div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed, ref, reactive,watchEffect, onMounted, watch, onUnmounted } from 'vue';

interface Position {
  x: number;
  y: number;
}

let props = defineProps({
  position: {
    type: Object as () => Position,
    default: undefined,
  },
  shadow: {
    type: String,
    default: '0 2px 8px rgba(0, 0, 0, 0.1)',
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
  // 目标元素接收class 或者 id 选择器
  targetSelector: {
    type: String,
    default: undefined,
  },
  placement: {
    type: String,
    default: 'top',
  },
});

let position = reactive(props.position || { x: 0, y: 0 });
let arrowPosition = reactive({});

let bubbleElement = ref<HTMLElement | null>(null);

const updatePosition = () => {
  if (props.targetSelector) {
    const targetElement = document.querySelector(props.targetSelector) as HTMLElement;
    if (targetElement) {
      const rect = targetElement.getBoundingClientRect();
      const bubbleElement = document.querySelector('.bubble-container') as HTMLElement;
      const windowHeight = window.innerHeight;
      const bubbleHeight = bubbleElement.offsetHeight;
      const windowWidth = window.innerWidth;
      const bubbleWidth = bubbleElement.offsetWidth;

      switch (props.placement) {
        case 'top':
          if (rect.top - bubbleHeight >= 0) {
            position.x = rect.left + window.scrollX;
            position.y = rect.top + window.scrollY - targetElement.offsetHeight;
          } else {
            position.x = rect.left + window.scrollX;
            position.y = rect.bottom + window.scrollY;
          }
          break;
        case 'bottom':
          if (rect.bottom + bubbleHeight <= windowHeight) {
            position.x = rect.left + window.scrollX;
            position.y = rect.bottom + window.scrollY;
          } else {
            position.x = rect.left + window.scrollX;
            position.y = rect.top + window.scrollY - targetElement.offsetHeight;
          }
          break;
        case 'left':
          if (rect.left - bubbleWidth >= 0) {
            position.x = rect.left + window.scrollX - bubbleElement.offsetWidth;
            position.y = rect.top + window.scrollY;
          } else if (rect.bottom + bubbleHeight <= windowHeight) {
            position.x = rect.left + window.scrollX;
            position.y = rect.bottom + window.scrollY;
          } else {
            position.x = rect.left + window.scrollX;
            position.y = rect.top + window.scrollY - targetElement.offsetHeight;
          }
          break;
        case 'right':
          if (rect.right + bubbleWidth <= windowWidth) {
            position.x = rect.right + window.scrollX;
            position.y = rect.top + window.scrollY;
          } else if (rect.bottom + bubbleHeight <= windowHeight) {
            position.x = rect.left + window.scrollX;
            position.y = rect.bottom + window.scrollY;
          } else {
            position.x = rect.left + window.scrollX;
            position.y = rect.top + window.scrollY - targetElement.offsetHeight;
          }
          break;
      }

      switch (props.arrowDirection) {
      case 'top':
        arrowPosition = { bottom: `${bubbleHeight - 6}px`, left: '50%', transform: 'translateX(-50%) rotate(45deg)', borderLeft: '1px solid #ddd', borderTop: '1px solid #ddd' };
        break;
      case 'bottom':
        arrowPosition = { top: `${bubbleHeight - 6}px`, left: '50%', transform: 'translateX(-50%) rotate(45deg)', borderRight: '1px solid #ddd', borderBottom: '1px solid #ddd' };
        break;
      case 'left':
        arrowPosition = { right: `${bubbleWidth - 6}px`, top: '50%', transform: 'translateY(-50%) rotate(45deg)', borderBottom: '1px solid #ddd', borderLeft: '1px solid #ddd' };
        break;
      case 'right':
        arrowPosition = { left: `${bubbleWidth - 6}px`, top: '50%', transform: 'translateY(-50%) rotate(45deg)', borderTop: '1px solid #ddd', borderRight: '1px solid #ddd' };
        break;
    }
    }
  }
};

onMounted(() => {
  bubbleElement.value = document.querySelector('.bubble-container')
  updatePosition();
  window.addEventListener('resize', updatePosition);
  window.addEventListener('scroll', updatePosition);
});
watchEffect(() => {
  if (bubbleElement.value?.innerHTML) {
    updatePosition();
  }
});
onUnmounted(() => {
  window.removeEventListener('resize', updatePosition);
  window.removeEventListener('scroll', updatePosition);
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

watch(() => props.targetSelector, updatePosition);
watch(() => props.position, (newVal) => {
  if (newVal) {
    position.x = newVal.x;
    position.y = newVal.y;
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

// let arrowPosition = computed(() => {
//   switch (arrowDirection.value) {
//     case 'top':
//       return { bottom: '96.5%', left: arrowPositionLeft.value + '%', transform: 'translateX(-50%) rotate(45deg)', borderLeft: '1px solid #ddd', borderTop: '1px solid #ddd' };
//     case 'bottom':
//       return { top: '96.5%', left: arrowPositionLeft.value + '%', transform: 'translateX(-50%) rotate(45deg)', borderRight: '1px solid #ddd', borderBottom: '1px solid #ddd' };
//     case 'left':
//       return { right: '96%', top: arrowPositionTop.value + '%', transform: 'translateY(-50%) rotate(45deg)', borderBottom: '1px solid #ddd', borderLeft: '1px solid #ddd' };
//     case 'right':
//       return { left: '96%', top: arrowPositionTop.value + '%', transform: 'translateY(-50%) rotate(45deg)', borderTop: '1px solid #ddd', borderRight: '1px solid #ddd' };
//     default:
//       return {};
//   }
// });

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
}

.bubble-arrow {
  position: absolute;
  width: 12px;
  height: 12px;
  background-color: #fff;
}
</style>