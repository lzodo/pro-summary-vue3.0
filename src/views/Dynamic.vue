<template>
    <div class="dynamic-page page">
        <si-header title="动态" isback="-1"></si-header>
        <div class="index-page">22</div>
        <tab-bar :tabIndex="2"></tab-bar>
    </div>
</template>

<script>
import { getDynamecList } from "@/api/dynamic.js";
import SiHeader from "@/components/SimpleHeader";
import TabBar from "@/components/TabBar"
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Dynamic",
    components:{
        SiHeader,
        TabBar
    },
    methods: {
        getList() {
            let params = { pageSize: 4, pageNumber: 1, name: "消极" };
            getDynamecList(params).then((res) => {
                console.log(res);
            });
        },
    },
    mounted() {
        this.getList();
    },
};
</script>

<style lang="scss" scoped>
@import "@/common/style/mixin.scss";
</style>
