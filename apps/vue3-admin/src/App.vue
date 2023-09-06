<template>
  <gk-svgdefs-fault ref="wo" >
    <button :style="{ filter: 'url(#filter)' }" class="btn" >
      <span>Click Me</span>
    </button>
    <div :style="{ filter: 'url(#filter)' }" style="background-color: black; height: 100px; width: 100px;"></div>
  </gk-svgdefs-fault>
</template>
  
  <script setup lang="ts">
  // import { ref } from 'vue'
  // import anime from 'animejs'
  
  // let animation: any = null
  // const state = ref({ value: 0.0001 })
  
  // const startAnimation = () => {
  //   animation = anime.timeline({ 
  //     targets: state.value,
  //     easing: 'easeInOutQuad',
  //     loop: false
  //   })
  
  //   animation
  //     .add({
  //       value: 0.8,
  //       duration: 50,
  //     })
  //     .add({
  //       value: 0,
  //       duration: 50,
  //     })
  // }
  
  // const stopAnimation = () => {
  //   if (animation) {
  //     animation.pause();
  //     state.value = { value: 0.0001 };
  //   }
  // }
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