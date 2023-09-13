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
      <tr v-for="(row, rowIndex) in data" :key="rowIndex" :class="getRowClass(rowIndex)">
        <td v-for="(column, columnIndex) in columns" :key="columnIndex">
          {{ row[column.prop] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';

interface Column {
  label: string;
  prop: string;
}

interface Data {
  [key: string]: any;
}

const props = defineProps({
  columns: {
    type: Array as () => Column[],
    required: true,
  },
  data: {
    type: Array as () => Data[],
    required: true,
  },
  hoverEffect: {
    type: String,
    default: 'border',
  },
});

const getRowClass = (index: number) => {
  return props.hoverEffect === 'border' ? 'table-row-border' : 'table-row-shadow';
};
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

.table-row-border:hover td {
  border: 1px solid blue;
}

.table-row-shadow:hover {
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
}
</style>