<template>
    <div class="login">22</div>
</template>

<script>
import { signin } from "@/api/login.js";
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Login",
    methods: {
        userLogin() {
            signin({"name":"lzo","passwd":"456"}).then(res=>{
                console.log(res);
                localStorage.setItem("token",res.token)
                localStorage.setItem("userInfo",JSON.stringify(res.userInfo))
            })
        },
    },
    mounted() {
        this.userLogin();
    },
};
</script>

<style lang="scss" scoped>
@import "@/common/style/mixin.scss";
</style>
