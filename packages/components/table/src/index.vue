<template>
  <table>
    <thead>
      <tr>
        <th v-for="(column, index) in columns" :key="index">
          {{ column.label }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, rowIndex) in data" :key="rowIndex" class="table-row" :class="{ 'fill-active': row.fillActive }" :style="`transition: all ${row.fillDuration}s ease-out`">
        <td v-for="(column, columnIndex) in columns" :key="columnIndex">
          {{ row[column.prop] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

interface Column {
  label: string;
  prop: string;
}

interface Data {
  [key: string]: any;
  fillDuration: number;
  fillActive: boolean;
}

defineProps({
  columns: {
    type: Array as () => Column[],
    required: true,
  },
  data: {
    type: Array as () => Data[],
    required: true,
  },
});
</script>

<style scoped>
table {
  width: 100%;
  border-spacing: 0;
}

th, td {
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

.table-row {
  background: linear-gradient(to right, red 50%, white 50%);
  background-size: 200% 100%;
  background-position: right bottom;
}

.table-row.fill-active {
  background-position: left bottom;
}
</style>