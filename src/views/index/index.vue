<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="index-page page tabbar-page header-page">
    <si-header title="首页" isback="-1"></si-header>
    <div class="index-main">
      <div class="banner-list">
        <BannerSwiper></BannerSwiper>
      </div>
      <div class="gird-layout">
        <div class="item">
          <KLineEchart></KLineEchart>
        </div>
        <div class="item">
          <LineEchart></LineEchart>
        </div>
        <div class="item">
          <PieEchart></PieEchart>
        </div>
        <div class="item">
          <BarStackEchart></BarStackEchart>
        </div>
        <div class="item">
          <MapEchart
            :mapData="[
              { name: '上海', value: 12345 },
              { name: '贵州', value: 12345 },
              { name: '广州', value: 12345 },
            ]"
          ></MapEchart>
        </div>
      </div>
    </div>
    <tab-bar :tabIndex="0"></tab-bar>
  </div>
</template>

<script setup>
// import { getDynamecList } from "@/api/index.js";
import SiHeader from "@/components/SimpleHeader";
import TabBar from "@/components/TabBar";
import BannerSwiper from "./index-cpn/Swiper.vue";
// import GridLayout from "./index-cpn/GridLayout.vue";
import {
  PieEchart,
  LineEchart,
  MapEchart,
  KLineEchart,
  BarStackEchart,
} from "@/components/PageEcharts";
</script>

<style lang="scss" scoped>
@import "@/common/style/mixin.scss";

.gird-layout {
  overflow: auto;
  padding: 10px;
  .item {
    padding: 10px;
    background-color: #fff;
    margin-bottom: 10px;
  }
}
</style>
