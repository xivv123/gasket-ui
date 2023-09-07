<template>
  <svg width="0" height="0">
    <defs>
      <filter id="water">
        <feTurbulence type="fractalNoise" :baseFrequency="'0 ' + state.value" numOctaves="1" result="turbulence" />
        <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="50" xChannelSelector="R" yChannelSelector="G"/>
      </filter>
    </defs>
  </svg>
</template>

<script setup lang="ts">
  import { ref, defineProps } from 'vue'
  import anime from 'animejs'
  const state = ref({ value: 0.0001 })
  // const props = defineProps({
  //   state: Object
  // })
  let animation: any = null
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