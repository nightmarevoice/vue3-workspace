<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { TestApi } from '@/service/core/customer'
import BaseChart from '@/components/BaseChart.vue'
import useAppStore from '@/store/app'
import { storeToRefs } from 'pinia'
defineProps<{ msg: string }>()
const store = useAppStore()
const count1 = ref(0)
const getList = async () => {
  const result = await TestApi({ current: 1, pageSize: 20, status: 1, tenantId: 10 })
  console.log(result, 1233)
}
const { count, name } = storeToRefs(store)

onMounted(() => {
  getList()
})
</script>

<template>
  <div class="bg">大屏页面</div>
  <div class="chart-content">
    <BaseChart></BaseChart>
  </div>
</template>

<style scoped>
.bg {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: auto;
  background-position: center;
  background-image: url('https://online-stream.oss-cn-hangzhou.aliyuncs.com/pub/house/image/1644988937894.png');
}
.chart-content {
  width: 300px;
  height: 300px;
}
</style>
