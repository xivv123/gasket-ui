<template>
  <gk-table :columns="columns" :data="data" :fillDuration="9"></gk-table>
</template>

<script setup lang="ts">

const columns = [
  { label: '姓名', prop: 'name' },
  { label: '年龄', prop: 'age' },
  { label: '性别', prop: 'x' },
  // 其他列...
];

const data = [
  { name: '张三', age: 30, x: '男'},
  { name: '张三', age: 30, x: '男'},
  { name: '张三', age: 30, x: '男'},
  { name: '张三', age: 30, x: '男'},
  { name: '张三', age: 30, x: '男'},
  { name: '张三', age: 30, x: '男'},
  { name: '张三', age: 30, x: '男'},
  { name: '张三', age: 30, x: '男'},
  { name: '李四', age: 25 },
  { name: '李四', age: 25 },
  { name: '李四', age: 25 },
  { name: '李四', age: 25 },
  { name: '李四', age: 25 },
  { name: '李四', age: 25 },
  { name: '李四', age: 25 },
  // 其他数据...
];
</script>