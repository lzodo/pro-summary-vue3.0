<template>
    <div class="dynamic-page page tabbar-page header-page">
        <si-header title="动态" isback="-1"></si-header>
        <div class="top">
            <div class="bgbanner"></div>
            <div class="publish" @click="$toPath('/dynamic-add')">
                <van-icon name="add" />
            </div>
            <div class="avatarInfo">
                <div class="self-name">
                    <div class="name">{{ userInfo.displayName || "未设置" }}</div>
                    <van-image style="border-radius:5px;overflow: hidden;" width="60" height="60" fit="cover"
                        :src="$config.baseUrl + userInfo.headurl" />
                </div>
            </div>
        </div>
        <div class="dynamic-list">
            <van-list v-model:loading="loading" :finished="finished" offset="50" finished-text="没有更多了" @load="onLoad">
                <van-cell class='item' v-for="item in dynamicList" :key="item.id">
                    <div class="inner-box">
                        <div class="left">
                            <img :src="$config.baseUrl + item.users.headurl" />
                        </div>
                        <div class="right-info">
                            <div class="display-name">{{ item.users.displayName || "未设置" }}</div>
                            <div class="content">{{ item.content }}</div>
                            <div class="imgList">
                                <div v-if="item.paths && item.paths.length == 1">
                                    <van-image style="max-height:160px" width="230" height="180" position="left"
                                        fit="scale-down" :src="$config.baseUrl + item.paths[0]"
                                        @click="showImg($config.baseUrl + item.paths[0])" />
                                </div>
                                <template v-else-if="item.paths && item.paths.length > 1">
                                    <div class="item-img" v-for="(itemImg, indexImg) in item.paths" :key="itemImg">
                                        <van-image width="80" height="80" fit="cover" :src="$config.baseUrl + itemImg"
                                            @click="showImgs(item.paths, indexImg)" />
                                    </div>
                                </template>
                            </div>
                            <div class="time-headle">
                                <div class="time">{{ publishTime(item.createTime) }}</div>
                                <div class="delete" v-if="item.users.id == userInfo.id" @click="removeItem(item.id)">删除
                                </div>
                            </div>
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
import { getDynamecList, removeDynamic } from "@/api/dynamic.js";
import SiHeader from "@/components/SimpleHeader";
import TabBar from "@/components/TabBar";
import { ImagePreview, Dialog } from 'vant';

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Dynamic",
    data() {
        return {
            userInfo: JSON.parse(localStorage.getItem("userInfo")),
            defaultHeadurl: "",
            dynamicList: [],
            finished: false,
            loading: false,
            size: 10,
            number: 1,
        }
    },
    components: {
        SiHeader,
        TabBar
    },
    computed: {

    },
    methods: {
        removeItem(id) {
            Dialog.confirm({
                title: '',
                message: '确认删除该动态？ ',
            }).then(() => {
                removeDynamic(id).then(() => {
                    this.dynamicList = this.dynamicList.filter((res) => res.id != id);
                })
            })
        },
        showImg(url) {
            ImagePreview([url.replace("-small", "")]);
        },
        showImgs(list, index) {
            let datas = [];
            list.forEach(item => {
                datas.push(this.$config.baseUrl + item.replace("-small", ""));
            });
            ImagePreview({
                images: datas,
                startPosition: index,
            });
        },
        publishTime(UTC) {
            let timestamp = new Date(UTC).getTime();
            let now = new Date().getTime();
            let distance = now - timestamp;

            if (distance < 60000) {
                return "刚刚"
            } else if (distance < 3600000) {
                return (distance / 1000 / 60).toFixed(0) + "分钟前"
            } else if (distance < 86400000) {
                return (distance / 3600000).toFixed(0) + "小时前"
            } else {
                return (distance / 86400000).toFixed(0) + "天前"
            }

        },
        onLoad() {
            this.getList();
        },
        getList() {
            let params = { pageSize: this.size, pageNumber: this.number };
            getDynamecList(params).then((res) => {
                this.dynamicList = [...this.dynamicList, ...res.result.list];
                this.number++;
                this.loading = false;
                if (res.result.list.length == 0) {
                    this.finished = true;
                }
            });
        },
    },
    mounted() {
        this.defaultHeadurl = localStorage.getItem("userHead");
    },
};
</script>

<style lang="scss" scoped>
@import "@/common/style/mixin.scss";

.dynamic-page {
    background-color: #fff;
    overflow: auto;
}

.top {
    width: 100%;
    background-color: rgb(255, 255, 255);
    height: 300px;
    position: relative;

    .publish {
        width: 30px;
        height: 30px;
        position: absolute;
        right: 20px;
        top: 10px;
        font-size: 30px;
        color: #fff;
    }

    .bgbanner {
        width: 100%;
        height: 240px;
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
            top: -35px;

            .name {
                color: #fff;
                margin-right: 10px;
                margin-top: 5px;
                font-size: 17px;
                font-weight: bold;
            }

            .avatarimg {
                width: 60px;
                height: 60px;
                border-radius: 10px;
            }

            // >>> .van-image{
            //     border-radius: 10px;
            //     overflow: hidden;
            // }
        }
    }
}

.dynamic-list {
    width: 100%;

    // .van-list{
    //     min-height: 300px;
    //     overflow: auto;
    // }

    .item {
        margin: 6px 0;

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
                    font-size: 14px;
                    letter-spacing: 1px;
                    font-weight: bold;
                }

                .content {
                    word-wrap: break-word;
                    // margin-top: 2px;
                    font-size: 14px;
                    color: #000;
                }

                .time-headle {
                    display: flex;

                    .time {
                        font-size: 10px;
                        color: #777;
                    }

                    .delete {
                        font-size: 10px;
                        margin-left: 10px;
                        color: #4777c3;
                    }
                }
            }
        }
    }
}

.imgList {
    width: 100%;
    flex-wrap: wrap;
    display: flex;

    .item-img {
        width: 80px;
        height: 80px;
        margin: 2px 5px 5px 0;
        background-color: rgb(247, 247, 247);

        // max-width: 33%;
        img {
            width: 100%;
            height: 100%;
        }
    }
}
</style>
