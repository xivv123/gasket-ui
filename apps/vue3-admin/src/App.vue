<template>
  <button class="btn" @mouseover="hover = true" @mouseleave="hover = false">
    <svg>
      <filter id="noise">
        <feTurbulence :baseFrequency="baseFrequency" numOctaves="1" result="turbulence" seed="2" />
        <feDisplacementMap xChannelSelector="R" yChannelSelector="G" in="SourceGraphic" in2="turbulence" scale="30" />
      </filter>
    </svg>
    <span :style="{ filter: hover ? 'url(#noise)' : 'none' }">Click Me</span>
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
const hover = ref(false)
const baseFrequency = ref(0)

const animate = () => {
  let direction = 1
  const step = () => {
    if (baseFrequency.value > 0.3) direction = -1
    if (baseFrequency.value < 0.01) direction = 1
    baseFrequency.value += direction * 0.01
    requestAnimationFrame(step)
  }
  step()
}

onMounted(() => {
  animate()
})
</script>

<style scoped>
.btn {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007BFF;
  color: white;
  border: none;
  cursor: pointer;
  transition: filter 0.3s;
}
</style>