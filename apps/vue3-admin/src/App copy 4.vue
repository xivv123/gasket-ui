<template>
  <div class="upload-container">
    <input type="file" id="file" @change="handleFileUpload" multiple hidden />
    <label for="file" class="upload-button">
      <i class="el-icon-upload"></i>
      <span>点击上传</span>
    </label>
    <button @click="uploadFiles" class="upload-button" v-if="files.length">
      <i class="el-icon-upload"></i>
      <span>开始上传</span>
    </button>
    <table v-if="files.length">
      <thead>
        <tr>
          <th>文件名称</th>
          <th>文件大小</th>
          <th>文件类型</th>
          <th>预览</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(file, index) in files" :key="index">
          <td>{{ file.name }}</td>
          <td>{{ (file.size / 1024 / 1024).toFixed(2) }} MB</td>
          <td>{{ file.name.split('.').pop() }}</td>
          <td>
            <img :src="file.url" v-if="file.url" class="preview" />
          </td>
          <td>
            <button @click="deleteFile(index)">删除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const files = ref<Array<{name: string; size: number; type: string; url: string }>>([]);
// const files = ref<File[]>([]);
const chunkSize = 1024 * 1024; // 分段大小，这里为1MB

const handleFileUpload = (event: any) => {
  for (const file of event.target.files) {
    files.value.push({
      name: file.name,
      size: file.size,
      type: file.type,
      url: URL.createObjectURL(file),
    });
  }
};

const uploadFiles = async () => {
  for (const file of files.value) {
    const totalChunks = Math.ceil(file.size / chunkSize);
    for (let i = 0; i < totalChunks; i++) {
      const start = i * chunkSize;
      const end = Math.min(file.size, start + chunkSize);
      const chunk = file.slice(start, end);

      const formData = new FormData();
      formData.append('file', chunk);
      formData.append('filename', file.name);
      formData.append('chunkIndex', i.toString());
      formData.append('totalChunks', totalChunks.toString());

      // 这里的 '/upload' 是你的上传接口，需要替换为实际的接口
      await fetch('/upload', {
        method: 'POST',
        body: formData,
      });
    }
  }
};

const deleteFile = (index: number) => {
  files.value.splice(index, 1);
};
</script>

<style scoped>
.upload-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.upload-button {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  background-color: #409eff;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}

table {
  margin-top: 20px;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
}

th {
  background-color: #f2f2f2;
}

.preview {
  max-width: 100px;
  max-height: 100px;
}
</style>