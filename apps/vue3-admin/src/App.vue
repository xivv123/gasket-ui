<template>
  <!-- <div style="height: 500px; width: 600px; border: 1px solid black;"> -->
    <!-- 使用自定义右键菜单组件 -->
    测试右键点击菜单
    <gk-right-menu style="height: 500px; width: 600px; border: 1px solid black;" :menuItems="menuItems" @click="handleClick" />
  <!-- </div> -->
</template>

<script>
// import RightMenu from '@/components/right-menu/src/index.vue'

export default {
  data() {
    return {
      menuItems: [
        {
          text: "菜单项1",
          action: () => console.log('菜单项1被点击')
        },
        {
          text: "菜单项2",
          action: () => console.log('菜单项2被点击')
        },
        {
          text: "菜单项2222222",
          action: () => console.log('菜单项2被点击')
        },
        // 添加更多菜单项...
      ],
    }
  },
  methods: {
    handleClick(item) {
      // 处理 click 事件
      console.log('菜单项被点击', item)
    },
  },
}
</script>