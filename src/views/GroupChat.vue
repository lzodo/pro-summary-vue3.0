<template>
    <div class="group-page page tabbar-page header-page">
        <si-header title="群聊" isback="-1"></si-header>
        <div class="chat-box">
            <div class="msg-window">
                <div class="item" v-for="item in msgList" :key="item.time">
                    <div class="msgbox" :class="{ self: userInfo.id == item.id }" v-if="item.type == 2">
                        <div class="left">
                            <img :src="$config.baseUrl + item.headurl" />
                        </div>
                        <div class="right">
                            <div class="display-name">{{ item.displayName }}</div>
                            <div class="send-msg">{{ item.msg }}</div>
                            <div class="ematy"></div>
                        </div>
                    </div>
                    <div class="tips" v-else>
                        <div class="inner">{{ item.msg }}</div>
                    </div>
                </div>
                <div id="deviceScroll" ref="deviceScroll"></div>
            </div>
            <div class="msg-send">
                <van-field v-model="userMsgSend" placeholder="请输入消息" @keyup.enter="sendMsg"/>
                <van-button class="sendbtn" size="small" type="success" @click="sendMsg">发送</van-button>
            </div>
        </div>
        <tab-bar :tabIndex="1"></tab-bar>
    </div>
</template>

<script>
import SiHeader from "@/components/SimpleHeader";
import TabBar from "@/components/TabBar";
export default {
    name: "GroupPage",
    data() {
        return {
            ws: null,
            userMsgSend: "",
            msgList: [],
            userInfo: JSON.parse(localStorage.getItem("userInfo"))
        }
    },
    components: {
        SiHeader,
        TabBar
    },
    methods: {
        sendMsg() {
            if (this.userMsgSend) {
                this.ws.send(this.userMsgSend);
                this.userMsgSend = '';
            }
        },
    },
    beforeUnmount() {
        console.log('1111')
        this.ws.close();
    },
    mounted() {
        this.ws = new WebSocket(`${this.$config.socketUrl}/${this.userInfo.id}`);
        this.ws.onopen = function () {
            console.log("服务已连接");
        };
        this.ws.onmessage = (msg) => {
            console.log("来自服务器的数据：" + msg.data);
            let resData = JSON.parse(msg.data);
            let showObj = {};
            if (resData.type != 2) {
                showObj = { type: resData.type, id: resData.user.id + "_" + resData.type, msg: resData.msg + " " + resData.time }
                this.msgList = [...this.msgList, showObj];
            } else if (resData.type == 2) {
                showObj = { type: resData.type, id: resData.user.id, msg: resData.msg, displayName: resData.user.displayName || resData.user.name, headurl: resData.user.headurl };
                this.msgList = [...this.msgList, showObj];
            }
            
            this.$nextTick(()=>{
                this.$refs.deviceScroll.scrollIntoView({block: "end", inline: "nearest"});
            })
        };
        this.ws.onclose = () => {
            console.log("服务器关闭");
        };
    },
};
</script>

<style lang="scss" scoped>
@import "@/common/style/mixin.scss";

.chat-box {
    height: 100%;
    display: flex;
    flex-direction: column;

    .msg-window {
        flex: 1
    }

    .msg-send {
        background-color: #fff;
        height: 44px;
        display: flex;

        .sendbtn {
            width: 80px;
            margin: 6px 8px 0 0;
        }
    }
}

.msg-window {
    flex: 1;
    padding: 10px;
    overflow: auto;

    .tips {
        width: 100%;
        @include f-jc(center);

        .inner {
            background-color: rgb(229, 226, 226);
            font-size: 13px;
            color: $base-color;
            padding: 5px 20px;
            border-radius: 3px;
            display: inline-block;
            margin: 0 auto 35px;
        }
    }

    .msgbox {
        margin-bottom: 15px;
        display: flex;

        .left {
            width: 40px;
            flex-shrink: 0; // 避免被压缩
            margin-right: 20px;

            img {
                width: 100%;
                height: 40px;
                border-radius: 5px;
            }
        }

        .ematy {
            flex: 1;
        }

        .right {
            // flex: 1;
            overflow: auto;

            .display-name {
                font-size: 16px;
                color: #555;
                margin-bottom: 5px;
            }

            .send-msg {
                font-size: 15px;
                background-color: #fff;
                padding: 5px 10px;
                border-radius: 4px;
                word-wrap: break-word;
            }
        }

        &.self {
            flex-direction: row-reverse;

            .left {
                margin: 0 0 0 8px;
            }

            .right {
                .display-name {
                    display: none;
                }

                .send-msg {
                    background-color: #95EB6C;
                    // text-align: right;
                }
            }
        }
    }
}
</style>
