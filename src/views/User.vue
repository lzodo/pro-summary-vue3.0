<template>
    <div class="user-page page tabbar-page header-page">
        <si-header title="我" isback="-1"></si-header>
        <div>66</div>
        <tab-bar :tabIndex="3"></tab-bar>
    </div>
</template>

<script>
import SiHeader from "@/components/SimpleHeader";
import TabBar from "@/components/TabBar"
export default {
    name: "UserPage",
    components: {
        SiHeader,
        TabBar
    },
    methods: {

    },
    mounted() {
    },
};
</script>

<style lang="scss" scoped>
@import "@/common/style/mixin.scss";
</style>
