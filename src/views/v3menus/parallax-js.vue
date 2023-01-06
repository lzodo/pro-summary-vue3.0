<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="parallax-page page">
        <div data-relative-input="true" id="scene">
            <div data-depth="0.2">My first Layer!</div>
            <div data-depth="0.6">My second Layer!</div>
        </div>
    </div>
</template>

<script>
import Parallax from "parallax-js";
export default {
    mounted(){
        var scene = document.getElementById('scene');
        var parallaxInstance = new Parallax(scene, {
            relativeInput: true
        });
    }
}
</script>


<style lang="scss" scoped>
@import "@/common/style/mixin.scss";

.parallax-page{
    padding: 50px;
}
</style>
