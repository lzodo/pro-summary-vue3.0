<template>
    <footer class="footer">
        <ul class="tablist">
            <li class="item" :class="{ active: tabIndex == 0 }" @click="$toPath('/index')">
                <i class="iconfont iconhome1"></i>
                <span>首页</span>
            </li>
            <li class="item" :class="{ active: tabIndex == 1 }" @click="$toPath('/groupchat')">
                <i class="iconfont iconduihuakuang"></i>
                <span>群聊</span>
            </li>
            <li class="item" :class="{ active: tabIndex == 2 }" @click="$toPath('/dynamic')">
                <i class="iconfont icondongtai"></i>
                <span>动态</span>
            </li>
            <li class="item" :class="{ active: tabIndex == 3 }" @click="$toPath('/user')">
                <i class="iconfont iconwodewo"></i>
                <span>我的</span>
            </li>
        </ul>
    </footer>
</template>

<script>
export default {
    props: {
        leftFont: {
            typeof: String,
            default: "",
        },
        tabIndex: {
            typeof: Number,
            default: 0
        }
    },
    methods: {
        goBack() {
            if (this.isback == '-1') {
                this.$router.go(-1)
            } else {
                this.$router.push({ path: this.isback })
            }
        }
    },
    setup() {
        return {};
    },
};
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