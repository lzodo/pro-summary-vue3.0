<template>
    <div class="user-page page tabbar-page header-page">
        <si-header title="我" isback="-1"></si-header>
        <div class="user-head">
            <div class="left flex-t">
                <div class="headimg">
                    <van-image style="border-radius:5px;overflow: hidden;" width="60" height="60" fit="cover"
                        :src="$config.baseUrl + userInfo.headurl" />
                </div>
            </div>
            <div class="right">
                <div class="info">
                    <div class="display-name">{{ userInfo.displayName || "未设置" }}</div>
                    <div class="account-number">账号：{{ userInfo.name }}</div>
                </div>
                <div class="iconfont iconbianji" @click="$toPath('/user-edit')"></div>
            </div>
        </div>
        <van-cell-group>
            <van-cell title="设置" icon="setting-o" is-link/>
            <van-cell title="菜单" icon="bars" is-link @click="toMenus"/>
            <van-cell title="退出登录" icon="revoke" is-link @click="loginOut"/>
        </van-cell-group>
        <tab-bar :tabIndex="3"></tab-bar>
    </div>
</template>

<script>
import SiHeader from "@/components/SimpleHeader";
import TabBar from "@/components/TabBar"
export default {
    name: "UserPage",
    data() {
        return {
            userInfo: JSON.parse(localStorage.getItem("userInfo")),
            defaultHeadurl: ""
        }
    },
    components: {
        SiHeader,
        TabBar
    },
    methods: {
        editUserInfo(){},
        loginOut(){
            localStorage.removeItem("token");
            localStorage.removeItem("userInfo");
            localStorage.removeItem("userHead");
            this.$repPath("/login");
        },
        toMenus(){
            this.$toPath("/v3menus");
        }
    },
    mounted() {
        this.defaultHeadurl = localStorage.getItem("userHead");
    },
};
</script>

<style lang="scss" scoped>
@import "@/common/style/mixin.scss";

.user-head {
    height: 100px;
    background-color: #fff;
    padding: 15px 0 0 10px;
    display: flex;
    margin-bottom: 10px;

    .left {
        width: 60px;
        margin-left: 10px;

        .headimg {
            width: 150px;
            height: 150px;
            overflow: hidden;
            // background: rgb(238, 238, 238);
            border-radius: 15px;

            image {
                width: 100%;
                height: 100%;
            }
        }
    }

    .right {
        flex: 1;
        padding-left: 20px;
        display: flex;

        .info {
            flex: 1;

            .display-name {
                font-weight: bold;
                font-size: 16px;
                margin-bottom: 5px;
                color: #202020;
                padding-top: 8px;
            }

            .account-number {
                font-size: 16px;
                color: #585858;
            }
        }

        .iconfont {
            // float:right;
            width: 50px;
            margin-top: 18px;
            font-size: 30px;
            color: #777;

        }
    }
}
</style>
