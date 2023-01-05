<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="index-page page tabbar-page header-page">
        <si-header title="首页" isback="-1"></si-header>
        <div class="index-page">22</div>
        <tab-bar :tabIndex="0"></tab-bar>
    </div>
</template>

<script setup>
// import { getDynamecList } from "@/api/index.js";
import SiHeader from "@/components/SimpleHeader";
import TabBar from "@/components/TabBar"

</script>

<style lang="scss" scoped>
@import "@/common/style/mixin.scss";
</style>
