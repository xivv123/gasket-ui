<template>
  <div>
    <input type="file" @change="handleFileUpload" />
    <button @click="uploadFile">上传文件</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const file = ref(null);
const chunkSize = 1024 * 1024; // 分段大小，这里为1MB

const handleFileUpload = (event: any) => {
  file.value = event.target.files[0];
};

const uploadFile = async () => {
  if (!file.value) return;

  const totalChunks = Math.ceil(file.value.size / chunkSize);
  for (let i = 0; i < totalChunks; i++) {
    const start = i * chunkSize;
    const end = Math.min(file.value.size, start + chunkSize);
    const chunk = file.value.slice(start, end);

    const formData = new FormData();
    formData.append('file', chunk);
    formData.append('filename', file.value.name);
    formData.append('chunkIndex', i.toString());
    formData.append('totalChunks', totalChunks.toString());

    // 这里的 '/upload' 是你的上传接口，需要替换为实际的接口
    await fetch('/upload', {
      method: 'POST',
      body: formData,
    });
  }
};
</script>