<template>
  <div class="guide" v-if="currentStep">
    <div class="mask" :style="maskStyle"></div>
    <!-- <div class="highlight" :style="highlightStyle"></div> -->
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

let maskStyle = ref({});
let bubbleStyle = ref({});
let highlightStyle = ref({});

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
    // maskStyle.value = {
    //   position: 'fixed',
    //   top: '0',
    //   left: '0',
    //   width: '100%',
    //   height: '100%',
    //   backgroundColor: 'rgba(0, 0, 0, 0.5)',
    //   mixBlendMode: 'difference'
    // };
    maskStyle.value = {
      position: 'absolute',
      top: `${rect.top}px`,
      left: `${rect.left}px`,
      width: `${rect.width}px`,
      height: `${rect.height}px`,
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      mixBlendMode: 'difference'
    };
    bubbleStyle.value = {
      top: `${rect.bottom + 12}px`,
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
  background-color: rgba(0, 0, 0, 0.8);
}

.mask {
  background-color: rgba(255, 255, 255, 0.1);
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