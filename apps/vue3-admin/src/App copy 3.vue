<template> 
<div class="container">
  <!-- <div style="height:  200px; width: 100px;"> -->

    <div class="svg-box">
        <svg version="1.1" id="Calque_1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 80 80" enable-background="new 0 0 80 80" xml:space="preserve">
            <!-- <circle fill="#0194C7" cx="40" cy="40" r="40" /> -->
            <rect fill="red" x="10" y="10" width="180" height="30" />
            <text x="20" y="30" fill="white">我是一个按钮</text>
            <g>
              <!-- <span style="color: aliceblue;">asdasd</span> -->
              <!-- <path fill="#FFFFFF" d="M40,13.9c1,1.3,1.9,2.5,2.8,3.7c3,4.1,5.7,8.3,8.1,12.7c2,3.6,3.8,7.3,5,11.3c0.6,1.9,1.1,3.8,1.2,5.8
                c0.4,4.7-1,9-4,12.6c-2.8,3.3-6.4,5.4-10.8,5.9c-6.8,0.8-12.3-1.6-16.4-7.1c-1.8-2.4-2.8-5.2-3.1-8.2c-0.2-2.3,0-4.5,0.5-6.7
                c0.8-3.4,2.1-6.6,3.7-9.7c3.3-6.7,7.4-13,11.9-19C39.3,14.8,39.6,14.4,40,13.9z M32.3,34.5C32.3,34.5,32.3,34.5,32.3,34.5
                c-0.1,0.1-0.1,0.1-0.2,0.2c-1.4,2.6-2.7,5.4-3.5,8.2c-0.5,1.8-1,3.6-1,5.4c0,2.6,0.8,5,2.1,7.3c0.8,1.3,1.9,2.2,3.4,2.6
                c1.4,0.4,2.7-0.1,3.4-1.2c0.3-0.5,0.4-0.9,0.3-1.5c-0.1-0.6-0.4-1.1-0.8-1.6c-1.4-1.8-2.6-3.8-3.4-6c-1.4-3.8-1.4-7.7-0.7-11.6
                C32,35.7,32.1,35.1,32.3,34.5z"  
              /> -->
            </g>
        </svg>
    <!-- </div> -->
    <!-- <div class="circle delay1"></div> -->
    <!-- <div class="circle delay2"></div>
    <div class="circle delay3"></div>
    <div class="circle delay4"></div> -->
    
  </div>
</div>
</template>

<script setup lang="ts">
import SvgFilter from './SvgFilter.vue'
</script>

<style scoped>
h1 {
    text-align: center;
    color: #0194c7;
    position: relative;
    z-index: 1;
    margin-top: 50px;
}
.container {
    position: relative;
    display: block;
    width: 80px;
    margin: 60px auto;
}
.container:hover .delay1 {
    -webkit-animation: waves 2.5s linear;
    animation: waves 2.5s linear;
    -webkit-animation-delay: .1s;
    animation-delay: .1s;
}
.container:hover .delay2 {
    -webkit-animation: waves 2.5s linear 0.7s forwards;
    animation: waves 2.5s linear 0.7s forwards;
}
.container:hover .delay3 {
    -webkit-animation: waves 2.5s linear 1.3s forwards;
    animation: waves 2.5s linear 1.3s forwards;
}
.container:hover .delay4 {
    -webkit-animation: waves 2.5s linear 1.9s forwards;
    animation: waves 2.5s linear 1.9s forwards;
}
.svg-box {
    position: relative;
    z-index: 10;
}
.svg-box:hover {
    -webkit-animation: bloop 1s linear;
    animation: bloop 1s linear;
}
.circle {
    display: block;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    background: #0194c7;
    margin: 10px;
    -webkit-transition: 5s ease;
    transition: 5s ease;
    position: absolute;
    top: 0px;
}
@-webkit-keyframes waves {
    0% {
        -webkit-transform: scale(1);
        transform: scale(1);
        opacity: 1;
    }
    100% {
        -webkit-transform: scale(4);
        transform: scale(4);
        opacity: 0;
    }
}
@-webkit-keyframes bloop {
    0% {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
    }
    30% {
        -webkit-transform: scale3d(1.25, 0.75, 1);
        transform: scale3d(1.25, 0.75, 1);
    }
    40% {
        -webkit-transform: scale3d(0.75, 1.25, 1);
        transform: scale3d(0.75, 1.25, 1);
    }
    50% {
        -webkit-transform: scale3d(1.15, 0.85, 1);
        transform: scale3d(1.15, 0.85, 1);
    }
    65% {
        -webkit-transform: scale3d(0.95, 1.05, 1);
        transform: scale3d(0.95, 1.05, 1);
    }
    75% {
        -webkit-transform: scale3d(1.05, 0.95, 1);
        transform: scale3d(1.05, 0.95, 1);
    }
    100% {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
    }
}
@keyframes bloop {
    0% {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
    }
    30% {
        -webkit-transform: scale3d(1.25, 0.75, 1);
        transform: scale3d(1.25, 0.75, 1);
    }
    40% {
        -webkit-transform: scale3d(0.75, 1.25, 1);
        transform: scale3d(0.75, 1.25, 1);
    }
    50% {
        -webkit-transform: scale3d(1.15, 0.85, 1);
        transform: scale3d(1.15, 0.85, 1);
    }
    65% {
        -webkit-transform: scale3d(0.95, 1.05, 1);
        transform: scale3d(0.95, 1.05, 1);
    }
    75% {
        -webkit-transform: scale3d(1.05, 0.95, 1);
        transform: scale3d(1.05, 0.95, 1);
    }
    100% {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
    }
}
</style>