<template>
  <div v-if="type === 'florid'"
    @mouseover="mouseEntered = true" 
    @mouseleave="mouseEntered = false" 
    :class="mouseEntered ? 'bui-input-florid' : 'bui-input-florid-wrapper'"
    class="inline-block"
  >
    <input 
      class="input-inside"
      @input="shake && (isShaking = true)"
      @animationend="isShaking = false" 
      :class="{ 'shake-animation': isShaking }"
    />
    <span class="left"></span>
    <span class="top"></span>
    <span class="right"></span>
    <span class="bottom"></span>
  </div>
  <input v-else 
    class="input-Basic"
    :disabled="disabled"
    v-model="inputValue"
    @input="handleInput"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const mouseEntered = ref(false);
const isShaking = ref(false);
const inputValue = ref('');

// 定义一个 props 来接收用户传递的颜色值
const props = withDefaults(defineProps<{
  color?: string,
  textColor?: string,
  shake?: boolean,
  type?: string,
  disabled?: boolean,
  format?: 'number' | 'En' | 'Zh'
  height?: number,
  width?: string
}>(), {
  color: '#42b983', // 默认颜色
  textColor: '#000', // 默认文字颜色
  shake: false, // 默认不开启抖动效果
  type: 'Basic', // 默认类型
  disabled: false, // 默认不禁用
  format: 'number', // 默认只能输入数字
  width: 'number', // 默认输入框的宽度
  height: 20,// 默认输入框的高度
  
});

const handleInput = () => {
  if (props.format === 'number') {
    inputValue.value = inputValue.value.replace(/[^0-9]/g, '');
  } else if (props.format === 'En') {
    inputValue.value = inputValue.value.replace(/[^a-zA-Z]/g, '');
  } else if (props.format === 'Zh') {
    inputValue.value = inputValue.value.replace(/[^\u4e00-\u9fa5]/g, '');
  }
};
</script>

<style scoped>
/* 定义抖动动画 */
@keyframes shake {
  10%, 90% {
    transform: translate3d(-0.5px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(1px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-2px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(2px, 0, 0);
  }
}

/* 应用抖动动画 */
.shake-animation {
  animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
}

.bui-input-florid-wrapper {
    position: relative;
    width: 156px; 
    height: 26px;  
    text-align: center;
    border:1px solid v-bind(color);
    border-radius: 4px;
}

.bui-input-florid-hover-target {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
}


.bui-input-florid{
    position: relative;
    width: 156px; 
    height: 26px; 
    text-align: center;
    border:1px solid v-bind(color);
    border-radius: 4px;
}

/* 真正的输入框 */
.input-inside {
  height: 20px;
  width: 148px;
  color: v-bind(textColor);
  border: 0px solid transparent;  /* 设置边框为透明 */
  outline: none;  /* 隐藏获得焦点时的边框 */
}

.bui-input-florid span{
    position: absolute; 
    z-index: 111;
    background:#fff;
}
.bui-input-florid .left{
    left: -1px; 
    top: 0px; 
    width: 2px; 
    height: 26px; 
}
.bui-input-florid .top{ 
    right: 1px; 
    top: -3px; 
    width: 156px;
    height: 4px;
}
.bui-input-florid .right{ 
    right: -1px; 
    bottom: 0px;  
    width: 2px; 
    height: 27px;
}
.bui-input-florid .bottom{
    left: 0px; 
    top: 25px; 
    width: 156px; 
    height: 2px;
}
 .bui-input-florid:hover .bottom{
    animation:animateBottom 0.2s linear 0s;
    animation-fill-mode:forwards;
}
.bui-input-florid:hover .left{
    animation:animateLeft 0.2s linear 0.2s;
    animation-fill-mode:forwards;
}
.bui-input-florid:hover .top{
    animation:animateTop 0.2s linear 0.4s;
    animation-fill-mode:forwards;
}
.bui-input-florid:hover .right{
    animation:animateRight 0.2s linear 0.6s;
    animation-fill-mode:forwards;
}
 
@keyframes animateLeft{
    from{
        height:26px;
    }
    to{
       height:0;
    }
}
@keyframes animateTop{
    from{
        width:156px;
    }
    to{
       width:0;
    }
}
@keyframes animateRight{
    from{
        height:26px;
    }
    to{
       height:0;
    }
}
@keyframes animateBottom{
    from{
        width:156px;
    }
    to{
       width:0;
    }
}
</style>