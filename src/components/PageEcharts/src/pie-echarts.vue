<template>
  <!--单独封装饼状图-->
  <div class="pie-echarts">
    <baseEchart :options="options"></baseEchart>
  </div>
</template>

<script setup>
import { reactive, computed } from "vue";
import { baseEchart } from "..";

let seriesVal = reactive({
  list: [
    { value: 1048, name: "Search Engine" },
    { value: 735, name: "Direct" },
    { value: 580, name: "Email" },
    { value: 484, name: "Union Ads" },
    { value: 300, name: "Video Ads" },
  ],
});
let options = computed(() => {
  return {
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "5%",
      left: "center",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: seriesVal.list,
      },
    ],
  };
});

setTimeout(() => {
  // 数据改变实时改变，更新option，base 中监听option变化，更新图表
  seriesVal.list = [
    { value: 1048, name: "一" },
    { value: 7350, name: "二" },
    { value: 580, name: "三" },
    { value: 4840, name: "四" },
    { value: 300, name: "五" },
    { value: 1500, name: "六" },
  ];
  console.log("fdsfs");
}, 5000);
</script>

<style lang="scss" scoped></style>
