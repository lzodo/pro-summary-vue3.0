<template>
  <!--单独封装地图 https://echarts.apache.org/examples/zh/editor.html?c=geo-beef-cuts-->
  <div class="map-echarts">
    <baseEchart :options="options"></baseEchart>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { baseEchart } from "..";
import { convertData } from "../utils/convert-data";
// let seriesVal = reactive({ list: [150, 230, 224, 218, 135, 147, 260] })
// let xAxisVal = reactive({ list: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] })
// eslint-disable-next-line no-undef
const props = defineProps({
  mapData: [],
});
let options = computed(() => {
  return {
    backgroundColor: "#fff",
    title: {
      text: "全国销量统计",
      left: "center",
      textStyle: {
        color: "#fff",
      },
    },
    tooltip: {
      trigger: "item",
      formatter: function (params) {
        return params.name + " : " + params.value[2];
      },
    },
    visualMap: {
      min: 0,
      max: 60000,
      left: 20,
      bottom: 20,
      calculable: true,
      text: ["高", "低"],
      inRange: {
        color: ["rgb(70, 240, 252)", "rgb(250, 220, 46)", "rgb(245, 38, 186)"],
      },
      textStyle: {
        color: "#fff",
      },
    },
    geo: {
      // 设置使用的地图(注册过的china地址)
      map: "china",
      // 漫步: 支持鼠标缩放效果
      roam: "scale",
      emphasis: {
        areaColor: "#f4cccc",
        borderColor: "rgb(9, 54, 95)",
        itemStyle: {
          areaColor: "#f4cccc",
        },
      },
    },
    series: [
      {
        name: "销量",
        // 散点图在地图上展示数据
        type: "scatter",
        coordinateSystem: "geo",
        data: convertData(props.mapData),
        // 散点的大小(可以根据数据不同显示不同的大小, 设置为一个函数)
        symbolSize: 12,
        emphasis: {
          itemStyle: {
            borderColor: "#fff",
            borderWidth: 1,
          },
        },
      },
      {
        // 会自动生成geo地理坐标系统
        type: "map",
        // 设置使用的地图名称, 复用的是第0个坐标系统
        map: "china",
        geoIndex: 0,
        // 缩放地图
        aspectScale: 0.75,
        tooltip: {
          show: false,
        },
      },
    ],
  };
});

// setTimeout(() => {
// 	// 数据改变实时改变，更新option，base 中监听option变化，更新图表
// 	seriesVal.list = [1500, 230, 224, 218, 135, 147, 260]
// 	console.log('fdsfs')
// }, 5000)
</script>

<style lang="scss" scoped></style>
