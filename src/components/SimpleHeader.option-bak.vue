<template>
    <header class="header" :class="{ maintype: type == 'main', logintype: type == 'login' }">
        <div class="left">
            <div class="back" v-if="isback" @click="goBack">
                <van-icon class="ico" name="arrow-left" />
                <span class="font">{{ leftFont }}</span>
            </div>
        </div>
        <div class="title">{{ title }}</div>
        <div class="right f-center">
            <slot name="right"></slot>
        </div>
    </header>
</template>

<script>
export default {
    props: {
        title: {
            typeof: String,
            default: "",
        },
        type: {
            typeof: String,
            default: "",
        },
        isback: {
            typeof: String,
            default: "",
        },
        leftFont: {
            typeof: String,
            default: "",
        },
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

.header {
    background: $header-bg;
    height: $header-height;
    position: relative;
    border-bottom: 1px solid $boder-color;
    background: #fff;
    position: fixed;
    left: 0;
    top:0;
    z-index: 999;
    width: 100%;
    @include f-jc;

    .left {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;

        .back {
            height: 100%;
            display: inline-block;
            padding: 0 10px;
            color:$base-color;
            @include f-center;

            .font {
                // @include offset-t;
                // position: relative;
                // top:-2px;
            }

            .ico {
                position: relative;
                bottom: -1px;
            }
        }
    }

    .title {
        flex: 1;
        color:$base-color;
        @include f-center;
    }

    .right {
        width: 80px;
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
    }

    &.maintype {
        background: $main-bg;
    }

    &.logintype {
        background: $login-bg;
        border-bottom: none;
        .title{
            color: #fff;
        }
    }
}
</style>