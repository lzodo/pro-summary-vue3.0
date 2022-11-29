<template>
    <div class="page">
        {{infos}}
        <button @click="changeInfos">改变</button>
    </div>
</template>

<script>
export default {
    name: "TestCpn",
    props:{
        infos:{
            typeof:Object,
            default:()=> {}
        }
    },
    emits:["changeName"],
    setup(porps,ctx){
        console.log(porps)
        const changeInfos = ()=>{
            ctx.emit("changeName","fdasfdasfa")
        }
        return {
            changeInfos
        }
    }
};
</script>

<style lang="scss" scoped>
@import "@/common/style/mixin.scss";

</style>
