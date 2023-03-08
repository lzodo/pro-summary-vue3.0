<template>
  <!--单独封装饼状图-->
  <div class="kline-echarts">
    <baseEchart :options="options"></baseEchart>
  </div>
</template>

<script setup>
import { reactive, computed, ref } from "vue";
import { baseEchart } from "..";
let itemHold = ref(38);
let hold = ref(1600);
let state = ref("已开盘");
let money = computed(() => {
  return itemHold.value * hold.value;
});
let seriesVal = reactive({
  list: [
    [20, 34, 10, 38],
    [40, 35, 30, 50],
    [31, 38, 33, 44],
    [38, 38, 32, 42],
  ],
});
let xAxisVal = reactive({
  list: ["2023-03-05", "2023-03-06", "2023-03-07", "2023-03-08"],
});

let options = computed(() => {
  return {
    xAxis: {
      data: xAxisVal.list,
    },
    title: {
      text: `${state.value} 持${hold.value} - 价${itemHold.value} - 余额：${money.value}`,
      left: "center",
    },
    yAxis: {},
    series: [
      {
        type: "candlestick",
        data: seriesVal.list,
      },
    ],
  };
});

setTimeout(() => {
  seriesVal.list[3] = [38, 500, 5, 42];
  itemHold.value = 500;
}, 2000);
setTimeout(() => {
  seriesVal.list[3] = [38, 600, 5, 42];
  itemHold.value = 600;
}, 4000);
setTimeout(() => {
  seriesVal.list[3] = [38, 30, 600, 42];
  itemHold.value = 30;
}, 6000);
setTimeout(() => {
  seriesVal.list[3] = [38, 2, 600, 42];
  itemHold.value = 2;
}, 8000);
setTimeout(() => {
  seriesVal.list[3] = [38, 0.53, 600, 42];
  itemHold.value = 0.53;
  state.value = "已闭市";
}, 12000);
</script>

<style lang="scss" scoped>
.kline-echarts {
  padding-top: 10px;
}
</style>
