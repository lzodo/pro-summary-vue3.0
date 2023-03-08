<template>
  <!--单独封装饼状图-->
  <div class="line-echarts">
    <baseEchart :options="options"></baseEchart>
  </div>
</template>

<script setup>
import { reactive, computed } from "vue";
import { baseEchart } from "..";
let seriesVal = reactive({ list: [150, 230, 224, 218, 135, 147, 260] });
let xAxisVal = reactive({
  list: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
});

let options = computed(() => {
  return {
    xAxis: {
      type: "category",
      data: xAxisVal.list,
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: seriesVal.list,
        type: "line",
      },
    ],
  };
});

setTimeout(() => {
  // 数据改变实时改变，更新option，base 中监听option变化，更新图表
  seriesVal.list = [1500, 230, 224, 218, 135, 147, 260];
  console.log("fdsfs");
}, 5000);
</script>

<style lang="scss" scoped></style>
