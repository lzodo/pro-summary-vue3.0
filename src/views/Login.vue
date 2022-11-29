<template>
    <div class="login-page page header-page">
        <si-header title="登录" type="login"></si-header>
        <div class="top">
            <div class="menu">
                <div class="item" :class="{ active: activeIndex == 0 }" @click="changeTab(0)">
                    Sign In
                </div>
                <div class="item" :class="{ active: activeIndex == 1 }" @click="changeTab(1)">
                    Sign Up
                </div>
            </div>
        </div>
        <div class="loginInfo">
            <div class="loginInner">
                <div class="sign sign-in">
                    <div class="input-info">
                        <span class="label">user name or email</span>
                        <van-field right-icon="manager-o" v-model="username" placeholder="请输入用户名" />
                    </div>
                    <div class="input-info">
                        <span class="label">passwd</span>
                        <van-field right-icon="eye-o" v-model="passwd" placeholder="请输入密码" type="password" />
                    </div>
                    <van-field
                        v-if="activeIndex == 0"
                        v-model="userCodeVal"
                        center
                        clearable
                        label=""
                        placeholder="请输入验证码"
                        label-width="50"
                    >
                        <template #button>
                            <img class='verimgcode' :src="verImg" @click="getVerifCode"/>
                        </template>
                    </van-field>
                    
                    <button class="submitbtn" type="warning" v-if="activeIndex == 0" @keydown.enter="signin" @click="signin">
                        登 录
                    </button>
                    <button class="submitbtn" type="warning" v-if="activeIndex == 1" @click="signup">
                        注 册
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Notify } from 'vant';
import { signin, signup, verifCode} from "@/api/login.js";
import { hasEmaty } from "@/utils/tool"
import SiHeader from "@/components/SimpleHeader";
import { defineComponent } from "vue";
import head_m from "@/assets/images/head_m.png";
import head_g from "@/assets/images/head_g.png";
export default defineComponent({
    name: "UserLogin",
    data() {
        return {
            activeIndex: 0,
            username: "cs1",
            passwd: "1",
            verToken:"",
            verImg:"",
            userCodeVal:""
        };
    },
    components: {
        SiHeader,
    },

    methods: {
        changeTab(index) {
            this.activeIndex = index;
        },
        signin() {
            let params = {
                name: this.username,
                passwd: this.passwd
            }
            if (hasEmaty(params)) {
                return;
            }
            if(this.verToken != this.userCodeVal){
                Notify('验证码不正确');
                return;
            }
            signin(params).then((res) => {
                localStorage.setItem("token", res.token);
                localStorage.setItem("userInfo", JSON.stringify(res.userInfo));

                let defaultHeadurl = "";
                if (res.userInfo.headurl) {
                    defaultHeadurl = this.$config.baseUrl + res.userInfo.headurl;
                } else {
                    defaultHeadurl = res.userInfo.sex == "男" ? head_m : head_g;
                }
                localStorage.setItem("userHead",defaultHeadurl);

                this.$router.push({
                    path: "/index"
                })
            });
        },
        signup() {
            let params = {
                name: this.username,
                passwd: this.passwd
            }
            if (hasEmaty(params)) {
                return;
            }
            signup(params).then(() => {
                this.activeIndex = 0;
            });
        },
        getVerifCode(){
            verifCode().then((res) => {
                this.verImg = `data:image/jpeg;base64,${res.base64}`;
                this.verToken = res.token;
            });
        },
    },
    mounted() {
        this.getVerifCode(); 
    },
});
</script>

<style lang="scss" scoped>
@import "@/common/style/mixin.scss";
.login-page {
    background: #fff;
}
.top {
    height: 150px;
    background-color: $login-bg;
    border-radius: 0 0 50px 0;
    position: relative;

    .menu {
        position: absolute;
        bottom: 20px;
        left: 40px;
        color: #fff;
        display: flex;

        .item {
            margin-right: 20px;
            font-size: 16px;
            padding-bottom: 10px;

            &.active {
                border-bottom: 1px solid #fff;
            }
        }
    }
}

.verimgcode{
    width: 100px;
}

.loginInfo {
    background-color: $login-bg;
    flex: 1;
}

.loginInner {
    background: #fff;
    height: 100%;
    width: 100%;
    border-radius: 50px 0 0 0;

    .sign {
        padding: 60px 40px 0;

        .input-info {
            border-bottom: 1px solid #e9e9e9;
            padding-bottom: 1px;
            margin-bottom: 20px;

            .label {
                color: #dbdbdb;
                display: inline-block;
                margin-bottom: 8px;
                font-size: 19px;
            }

            .van-field {
                font-size: 16px;
            }
        }
    }
}

.submitbtn {
    background: $login-bg !important;
    border-radius: 80px;
    color: #fff;
    width: 100%;
    padding: 8px;
}
</style>
