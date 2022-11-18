<template>
    <div class="dynamic-page">22</div>
</template>

<script>
import { getDynamecList } from "@/api/dynamic.js";
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Dynamic",
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
