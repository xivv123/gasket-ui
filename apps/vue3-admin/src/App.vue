<template>
  <div class="container">
    <header class="box1">
      <div class="logo ">Logo</div>
      <div class="login">登录</div>
    </header>
    <div class="carousel " style="width: 500px;">轮播图</div>
    
    <main >
      <div class="cards">
        <div class="card box2" v-for="i in 6" :key="i">卡片 {{ i }}</div>
      </div>
    </main>
    <footer class="box3">底部</footer>
  </div>
  <Bubble
    targetSelector=".carousel"
    placement="left"
    style="margin-left: 100px;"
  >
  </Bubble>

</template>
<script setup lang="ts">
import Bubble from './Bubble.vue';

const guideData = [
  {
    title: '引导1',
    text: '这个是头部区域',
    domElement: '.box1',
    direction: 'left', // 箭头的位置指向
    top: '15',
    placement: 'down',
    button: [
      {
        text: '下一步',
        action: 'next'
      }
    ]
  },
  {
    title: '引导2',
    text: '这个是主体区域',
    domElement: '.box2',
    direction: 'down', // 箭头的位置指向
    left: '20',
    placement: 'left',
    button: [
    {
        text: '上一步',
        action: 'back'
      },
      {
        text: '下一步',
        action: 'next'
      }
    ]
  },
  {
    title: '引导3',
    text: '这个是底部区域',
    domElement: '.box3',
    button: [
      {
        text: '上一步',
        action: 'back'
      }
    ]
  }
  // 添加更多步骤...
];
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

header {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.carousel {
  width: 100%;
  height: 200px;
  background-color: #eee;
}

.cards {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.card {
  width: 100px;
  height: 100px;
  margin: 10px;
  background-color: #ddd;
}

footer {
  width: 100%;
  height: 50px;
  background-color: #ccc;
}
</style>