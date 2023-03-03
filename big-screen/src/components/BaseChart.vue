<template>
  <div id="chartcontainer">这是图标集合页面</div>
</template>

<script lang="ts" setup>
import { reactive, ref, defineComponent, inject, onMounted } from 'vue'
import fontSize from '@/utils/fontSize'
const echarts = inject('$echarts')

onMounted(() => {
  const myChart = (echarts as any).init(document.getElementById('chartcontainer'))
  setOption(myChart)
  window.addEventListener('resize', () => {
    myChart.resize()
    setOption(myChart)
  })
})
const setOption = (myChart: any) => {
  myChart.setOption({
    title: {
      text: '11',
      textStyle: {
        fontSize: fontSize(50)
      }
    },
    tooltip: {},
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
#chartcontainer {
  width: 100%;
  height: 100%;
}
</style>

