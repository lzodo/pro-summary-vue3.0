<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="r-page page">
        vueuse{{data.a}}
    </div>
</template>

<script setup>
import { reactive } from 'vue';
let data = reactive({a:1})
</script>

<style lang="scss" scoped>
@import "@/common/style/mixin.scss";


</style>