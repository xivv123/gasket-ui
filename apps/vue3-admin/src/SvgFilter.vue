<template>
    <svg width="0" height="0">
      <defs>
        <filter id="filter" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="linearRGB">
          <feTurbulence type="fractalNoise" :baseFrequency="'0 ' + state.value" numOctaves="2" seed="2" stitchTiles="stitch" x="0%" y="0%" width="100%" height="100%" result="turbulence"/>
          <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="80" xChannelSelector="R" yChannelSelector="B" x="0%" y="0%" width="100%" height="100%" result="displacementMap"/>
        </filter>
      </defs>
    </svg>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
 const state = ref({ value: 0.0001 })

 state
  </script>