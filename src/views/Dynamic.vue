<template>
    <div class="dynamic-page page tabbar-page header-page">
        <si-header title="动态" isback="-1"></si-header>
        <div class="top">
            <div class="bgbanner">

            </div>
            <div class="avatarInfo">
                <div class="self-name">
                    <div class="name">{{ userInfo.displayName || "未设置" }}</div>
                    <img class='avatarimg' :src="$config.baseUrl + userInfo.headurl" />
                </div>
            </div>
        </div>
        <div class="dynamic-list">
            <van-list
                v-model:loading="loading"
                :finished="finished"
                offset="50"
                finished-text="没有更多了"
                @load="onLoad"
                >
                <van-cell class='item' v-for="item in dynamicList" :key="item.id">
                    <div class="inner-box">
                        <div class="left">
                            <img :src="$config.baseUrl + item.users.headurl" />
                        </div>
                        <div class="right-info">
                            <div class="display-name">{{ item.users.displayName || "未设置" }}</div>
                            <div class="content">{{ item.content }}</div>
                        </div>
                    </div>
                    <!-- <van-divider /> -->
                </van-cell>
            </van-list>
        </div>
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
    data() {
        return {
            userInfo: JSON.parse(localStorage.getItem("userInfo")),
            dynamicList: [],
            finished:false,
            loading:false
        }
    },
    components: {
        SiHeader,
        TabBar
    },
    methods: {
        onLoad(){
            console.log('xxxx')
        },
        getList() {
            let params = { pageSize: 10, pageNumber: 1, name: "消极" };
            getDynamecList(params).then((res) => {
                this.dynamicList = res.result.list;
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

.dynamic-page{
    background-color: #fff;
    overflow: auto;
}
.top {
    width: 100%;
    background-color: rgb(255, 255, 255);
    height: 220px;

    .bgbanner {
        width: 100%;
        height: 160px;
        background: url("../assets/images/dynamic.jpg") no-repeat center/cover;
    }

    .avatarInfo {
        position: relative;
        width: 100%;
        height: 60px;

        .self-name {
            display: flex;
            position: absolute;
            right: 30px;
            top: -30px;

            .name {
                color: #fff;
                margin-right: 10px;
                font-size: 17px;
                font-weight: bold;
            }

            .avatarimg {
                width: 60px;
                height: 60px;
                border-radius: 10px;
            }
        }
    }
}

.dynamic-list {
    width: 100%;
    // min-height: 300rpx;

    .item {
        .inner-box {
            padding: 0 15px;
            display: flex;

            .left {
                height: 40px;
                width: 40px;
                margin-right: 10px;
                border-radius: 3px;
                background-color: #e2e2e2;
                overflow: hidden;

                img {
                    width: 100%;
                    height: 100%;
                }
            }

            .right-info {
                flex: 1;

                .display-name {
                    color: #3458ad;
                    font-size: 17px;
                    letter-spacing: 1px;
                    font-weight: bold;
                }

                .content {
                    word-wrap: break-word;
                    margin-top: 3px;
                    font-size: 17px;
                    color: #000;
                }
            }
        }
    }
}
</style>
