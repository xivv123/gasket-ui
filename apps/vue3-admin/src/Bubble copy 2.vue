<template>
  <div class="bubble-container" :style="{ left: `${position.x}px`, top: `${position.y}px`, boxShadow: shadow }">
    <div class="bubble-content">
      <slot></slot>
    </div>
    <div class="bubble-arrow" :class="arrowDirection" :style="arrowPosition"></div>
  </div>
</template>

<!-- 气泡组件 -->
<script setup lang="ts">
import { computed } from 'vue';

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
  arrowDirection: {
    type: String,
    default: 'up',
  },
  // 如果箭头方向是上和下，那么只能调整 left
  // 如果箭头方向是左和右，那么只能调整 top
  arrowPositionLeft: {
    type: Number,
    default: '50',
  },
  arrowPositionTop: {
    type: Number,
    default: '50',
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

let arrowPosition = computed(() => {
  switch (props.arrowDirection) {
    case 'up':
      return { bottom: '96.5%', left: arrowPositionLeft.value + '%', transform: 'translateX(-50%) rotate(45deg)', borderLeft: '1px solid #ddd', borderTop: '1px solid #ddd' };
    case 'down':
      return { top: '96.5%', left: arrowPositionLeft.value + '%', transform: 'translateX(-50%) rotate(45deg)', borderRight: '1px solid #ddd', borderBottom: '1px solid #ddd' };
    case 'left':
      return { right: '96%', top: arrowPositionTop.value + '%', transform: 'translateY(-50%) rotate(45deg)', borderBottom: '1px solid #ddd', borderLeft: '1px solid #ddd' };
    case 'right':
      return { left: '96%', top: arrowPositionTop.value + '%', transform: 'translateY(-50%) rotate(45deg)', borderTop: '1px solid #ddd', borderRight: '1px solid #ddd' };
    default:
      return {};
  }
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
}

.bubble-arrow {
  position: absolute;
  width: 12px;
  height: 12px;
  background-color: #fff;
}
</style>