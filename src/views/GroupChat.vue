<template>
    <div class="group-page page">
        <si-header title="群聊" isback="-1"></si-header>
        <div>33</div>
        <tab-bar :tabIndex="1"></tab-bar>
    </div>
</template>

<script>
import SiHeader from "@/components/SimpleHeader";
import TabBar from "@/components/TabBar"
export default {
    name: "GroupPage",
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
