<template>
  <div class="guide" v-if="currentStep">
    <div class="mask" :style="maskStyle.top"></div>
    <div class="mask" :style="maskStyle.right"></div>
    <div class="mask" :style="maskStyle.bottom"></div>
    <div class="mask" :style="maskStyle.left"></div>
    <div class="bubble" :style="bubbleStyle">
      <h1>{{ currentStep.title }}</h1>
      <p v-html="currentStep.text"></p>
      <button v-for="btn in currentStep.button" :key="btn.text" @click="handleAction(btn.action)">{{ btn.text }}</button>
      <button v-if="currentStepIndex.value > 0" @click="handleAction('back')">上一步</button>
      <button @click="handleAction('complete')">结束引导</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, onUnmounted } from 'vue';

const props = defineProps({
  guideData: Array
});

let currentStepIndex = ref(0);
let currentStep = ref(props.guideData[currentStepIndex.value]);

let maskStyle = ref({
  top: {},
  right: {},
  bottom: {},
  left: {}
});
let bubbleStyle = ref({});

onMounted(() => {
  updateStyles();
  window.addEventListener('resize', updateStyles);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateStyles);
});

watch(currentStepIndex, () => {
  currentStep.value = props.guideData[currentStepIndex.value];
  updateStyles();
});

function updateStyles() {
  const element = document.querySelector(currentStep.value.domElement);
  if (element) {
    const rect = element.getBoundingClientRect();
    maskStyle.value = {
      top: {
        top: '0',
        left: '0',
        right: '0',
        height: `${rect.top}px`
      },
      right: {
        top: '0',
        left: `${rect.right}px`,
        bottom: '0',
        right: '0'
      },
      bottom: {
        top: `${rect.bottom}px`,
        left: '0',
        right: '0',
        bottom: '0'
      },
      left: {
        top: '0',
        left: '0',
        right: `${rect.left}px`,
        bottom: '0'
      }
    };
    bubbleStyle.value = {
      top: `${rect.bottom + 10}px`,
      left: `${rect.left}px`
    };
  }
}

function handleAction(action) {
  switch (action) {
    case 'next':
      if (currentStepIndex.value < props.guideData.length - 1) {
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
.guide {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.mask {
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  pointer-events: auto;
}

.bubble {
  position: fixed;
  background: white;
  padding: 1em;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  pointer-events: auto;
}

.bubble::before {
  content: '';
  position: absolute;
  bottom: 100%;
  left: 50%;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid white;
  transform: translateX(-50%);
}
</style>