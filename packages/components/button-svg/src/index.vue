<template>
    <button class="btn" @mouseover="hover = true" @mouseleave="hover = false">
      <svg width="0" height="0">
        <filter id="blur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
        </filter>
      </svg>
      <span :style="{ filter: hover ? 'url(#blur)' : 'none' }">Click Me</span>
    </button>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  const hover = ref(false)
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