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
    <gk-table :columns="columns" :data="files" v-if="files.length" ></gk-table>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const files = ref<Array<{fillActive: boolean, name: string; size: number; type: string; url: string; estimatedTime: string }>>([]);
const chunkSize = 1024 * 1024; // 分段大小，这里为1MB
const uploadSpeed = 1; // 上传速度，这里为1MB/s
// let fillActive1 = ref(false)
const columns = [
  { label: '文件名称', prop: 'name' },
  { label: '文件大小', prop: 'size' },
  { label: '文件类型', prop: 'type' },
  { label: '预览', prop: 'url' },
  { label: '预计时间', prop: 'estimatedTime' },
  // 其他列...
];

const handleFileUpload = (event: any) => {
  for (const file of event.target.files) {
    const fileSizeInMB = file.size / 1024 / 1024;
    const estimatedTime = (fileSizeInMB / uploadSpeed).toFixed(2) + ' 秒';
    files.value.push({
      name: file.name,
      size: fileSizeInMB.toFixed(2) + ' MB',
      type: file.name.split('.').pop(),
      url: URL.createObjectURL(file),
      estimatedTime: estimatedTime,
      fillDuration: parseFloat(estimatedTime), // 将预计的上传时间赋值给 fillDuration
      fillActive: false, // 将预计的上传时间赋值给 fillDuration
    });
  }
};

const uploadFiles = async () => {
  
  for (const file of files.value) {
    file.fillActive = true; // 将 fillActive 设置为 true
    const totalChunks = Math.ceil(file.size / chunkSize);
    const startTime = Date.now(); // 记录开始时间
    // fillDurationP.value = parseFloat(file.estimatedTime); // 将预计的上传时间赋值给 fillDurationP
    for (let i = 0; i < totalChunks; i++) {
      const start = i * chunkSize;
      const end = Math.min(file.size, start + chunkSize);
      const chunk = file.slice(start, end);
      // let fillDuration: number = parseFloat(file.estimatedTime)
      const formData = new FormData();
      formData.append('file', chunk);
      formData.append('filename', file.name);
      formData.append('chunkIndex', i.toString());
      formData.append('totalChunks', totalChunks.toString());
      // formData.append('fillDuration', fillDuration);

      // 使用 setTimeout 来模拟异步上传文件
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    // fillActive1.value = true
    const endTime = Date.now(); // 记录结束时间
    const duration = (endTime - startTime) / 1000; // 计算上传时间，单位为秒
    console.log(`上传文件 ${file.name} 耗时：${duration} 秒`);
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