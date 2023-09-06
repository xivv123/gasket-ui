<template>
    <button :style="{ filter: 'url(#filter)' }" class="btn" @mouseover="startAnimation" @mouseleave="stopAnimation">
      <span>Click Me</span>
    </button>
  
    <SvgFilter ref="wo"/>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import anime from 'animejs'
  import SvgFilter, { state } from './SvgFilter.vue'
  
  let animation = null
  let wo = ref(null)

  console.log(wo)
  const startAnimation = () => {
    animation = anime.timeline({
      targets: state.value,
      easing: 'easeInOutQuad',
      loop: false
    })
  
    animation
      .add({
        value: 0.8,
        duration: 50,
      })
      .add({
        value: 0,
        duration: 50,
      })
  }
  
  const stopAnimation = () => {
    if (animation) {
      animation.pause();
      state.value = { value: 0.0001 };
    }
  }
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
    border-radius: 4px;
  }
  </style>