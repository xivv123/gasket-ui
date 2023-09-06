<template>
  <button :style="{ filter: 'url(#filter)' }" class="btn" @mouseover="startAnimation" @mouseleave="stopAnimation">
    <svg width="0" height="0">
      <defs>
        <filter id="filter" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="linearRGB">
          <feTurbulence type="fractalNoise" :baseFrequency="'0 ' + state.value" numOctaves="2" seed="2" stitchTiles="stitch" x="0%" y="0%" width="100%" height="100%" result="turbulence"/>
          <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="80" xChannelSelector="R" yChannelSelector="B" x="0%" y="0%" width="100%" height="100%" result="displacementMap"/>
        </filter>
      </defs>
    </svg>
    <span >Click Me</span>
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import anime from 'animejs'

const state = ref({ value: 0.0001 })
let animation = null

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