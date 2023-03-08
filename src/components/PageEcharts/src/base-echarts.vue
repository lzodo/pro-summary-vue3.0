<template>
  <div class="base-echerts">
    <div class="echart" ref="echartRef"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, watchEffect } from "vue";
import * as echarts from "echarts";
import ChinaJSON from "../data/china.json";
echarts.registerMap("china", ChinaJSON); // 注册一个地图数据

// eslint-disable-next-line no-undef
let props = defineProps({
  options: {
    type: Object,
  },
});
console.log(props, "fdsafasf");

const echartRef = ref();
onMounted(() => {
  // 基于准备好的dom，初始化echarts实例、设置主题、指定使用canvas渲染引擎
  let echartInstance = echarts.init(echartRef.value, "light", {
    renderer: "canvas",
  });
  // 绘制图表, 监听变化更新数据
  watchEffect(() => echartInstance.setOption(props.options));

  // 窗口变化重新加载
  // window.onresize = function () {
  // 	console.log('fdsfdsfsddd')
  // 	echartInstance.resize()
  // }
  window.addEventListener("resize", function () {
    echartInstance.resize();
  });
});
</script>

<style lang="scss" scoped>
.base-echerts {
  .echart {
    width: 100%;
    height: 100%;
    min-width: 300px;
    min-height: 400px;
  }
}
</style>
