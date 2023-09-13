<template>
  <div class="guide" v-if="currentStep">
    <div class="mask" :style="maskStyle"></div>
    <!-- <Bubble :position="{ x: bubbleStyle.left, y: bubbleStyle.top }" :shadow="bubbleStyle.boxShadow"> -->
      <Bubble 
        :position="{ x: bubbleStyle.left, y: bubbleStyle.top }" 
        :shadow="bubbleStyle.boxShadow" 
        :arrowDirection="currentStep.direction" 
        :arrowPositionLeft="currentStep.left"
        :arrowPositionTop="currentStep.top"
      >
      <h1>{{ currentStep.title }}</h1>
      <p v-html="currentStep.text"></p>
      <button v-for="btn in currentStep.button" :key="btn.text" @click="handleAction(btn.action)">{{ btn.text }}</button>
      <button @click="handleAction('complete')">结束引导</button>
    </Bubble>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, onUnmounted,  } from 'vue';
import Bubble from './Bubble.vue';

interface Position {
  x: number;
  y: number;
}

let props = defineProps({
  guideData: Array,
  direction: String
});

let guideData = props.guideData;
let currentStepIndex = ref(0);
let currentStep = ref(guideData[currentStepIndex.value]);

let maskStyle = ref({});
let bubbleStyle = ref({
  left: '0px',
  top: '0px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
});
let highlightStyle = ref({});

onMounted(() => {
  updateStyles();
  window.addEventListener('resize', updateStyles);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateStyles);
});

watch(currentStepIndex, () => {
  currentStep.value = guideData[currentStepIndex.value];
  updateStyles();
});

function updateStyles() {
  const element = document.querySelector(currentStep.value.domElement);
  if (element) {
    const rect = element.getBoundingClientRect();
    maskStyle.value = {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      borderColor: 'rgba(0, 0, 0, 0.8)',
      borderStyle: 'solid',
      borderWidth: `${rect.top}px ${window.innerWidth - rect.right}px ${window.innerHeight - rect.bottom}px ${rect.left}px`,
      boxSizing: 'border-box'
    };
    bubbleStyle.value = {
      left: rect.left,
      top: rect.bottom,
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
    };
    console.log(bubbleStyle.value)
  }
}

function handleAction(action) {
  switch (action) {
    case 'next':
      if (currentStepIndex.value < guideData.length - 1) {
        currentStepIndex.value++;
      }
      break;
    case 'back':
      if (currentStepIndex.value > 0) {
        currentStepIndex.value--;
      }
      break;
    case 'complete':
      currentStep.value = null;
      break;
  }
}
</script>

<style scoped>
.mask {
  pointer-events: none;
}
</style>