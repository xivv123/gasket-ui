<template>
  <div>
    <button @click="showBubble = !showBubble">切换气泡</button>
    <Bubble v-if="showBubble" :position="{ x: 100, y: 100 }">
      <p>这是一个气泡。</p>
    </Bubble>
  </div>
</template>

<script setup lang="ts">
import Bubble from './Bubble.vue';
import { ref } from 'vue';

const showBubble = ref(false);
</script>