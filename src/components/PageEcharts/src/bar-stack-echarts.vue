<template>
  <!--单独封装饼状图-->
  <div class="bar-stack-echarts">
    <baseEchart :options="options"></baseEchart>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { baseEchart } from "..";

let options = computed(() => {
  return {
    title: [
      {
        text: "ces ",
      },
    ],
    polar: {
      radius: [30, "80%"],
    },
    angleAxis: {
      max: 4,
      startAngle: 75,
    },
    radiusAxis: {
      type: "category",
      data: ["a", "b", "c", "d"],
    },
    tooltip: {},
    series: {
      type: "bar",
      data: [2, 1.2, 2.4, 3.6],
      coordinateSystem: "polar",
      label: {
        show: true,
        position: "middle",
        formatter: "{b}: {c}",
      },
    },
  };
});
</script>

<style lang="scss" scoped></style>
