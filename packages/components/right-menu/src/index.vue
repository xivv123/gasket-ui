<template>
  <div @contextmenu.prevent="showMenu($event)">
    <ul v-if="show" :style="{ top: `${menuPosition.y}px`, left: `${menuPosition.x}px` }" class="custom-menu">
      <li v-for="(item, index) in menuItems" :key="index" @click="handleMenuItemClick(item)" class="custom-menu-item">
       
        <div class="table-right-menu-item-btn">
        <i :class="item.icoName" class="iii" />
        <span>{{ item.text }}</span>
      </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// 定义 props
const props = withDefaults(defineProps<{
  menuItems: { text: string, action: () => void }[]
}>(), {
  menuItems: []
})

// 定义 emit
const emit = defineEmits(['click'])

// 菜单的显示状态
const show = ref(false)

// 菜单的位置
const menuPosition = ref({ x: 0, y: 0 })

// 显示菜单
const showMenu = (event) => {
  console.log(event)
  menuPosition.value = { x: event.clientX, y: event.clientY }
  show.value = true
}

// 处理菜单项点击
const handleMenuItemClick = (item) => {
  item.action()
  emit('click', item)
  show.value = false
}

// 点击其他地方时隐藏菜单
document.addEventListener('click', () => {
  console.log(1)
  show.value = false
})
</script>

<style scoped>


.custom-menu {
  color: #333;
  background: #fff;
  border-radius: 4px;
  list-style-type: none;
  box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.3);
  font-size: 12px;
  font-weight: 500;
  box-sizing: border-box;
  padding: 4px 0;
  position: fixed;
  z-index: 3000;
}

.custom-menu .custom-menu-item {
  box-sizing: border-box;
  padding: 6px 12px;
  border-radius: 4px;
  transition: all 0.36s;
  cursor: pointer;
}

.custom-menu .custom-menu-item .custom-menu-item-btn .iii {
  margin-right: 4px;
}

.custom-menu .custom-menu-item:hover {
  background-color: #ebf5ff;
  color: #6bacf2;
}
</style>