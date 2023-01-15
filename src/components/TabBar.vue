<template>
    <footer class="footer">
        <ul class="tablist">
            <li class="item" :class="{ active: tabIndex == index }" @click="$toPath(item.path)"
                v-for="(item,index) in tabbarList" :key="index">
                <i class="iconfont" :class="item.icon"></i>
                <span>{{ item.name }}</span>
            </li>
        </ul>
    </footer>
</template>

<script setup>
const props = defineProps({
    tabIndex: {
        typeof: Number,
        default: 0
    }
})

const tabbarList = [
    {
        name: "首页",
        path: "/index",
        icon: "iconhome1"
    },
    {
        name: "群聊",
        path: "/groupchat",
        icon: "iconduihuakuang"
    },
    {
        name: "动态",
        path: "/dynamic",
        icon: "icondongtai"
    },
    {
        name: "我的",
        path: "/user",
        icon: "iconwodewo"
    }
]
</script>

<style lang="scss" scoped>
@import "@/common/style/mixin.scss";

.footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: $tabbar-height;
    background: #fff;
    border-top: 1px solid $boder-color;

    .tablist {
        @include f-jc;
        height: 100%;
        display: flex;
        justify-content: space-between;

        .item {
            flex: 1;
            height: 100%;
            @include f-center;
            flex-direction: column;
            color: $base-color;

            i {
                font-size: 21px;
                margin-bottom: 5px;
            }

            span {
                font-size: 12px;
            }

            &.active {
                color: $main-color;
            }
        }
    }
}
</style>