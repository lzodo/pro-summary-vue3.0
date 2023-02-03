<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="grid-box">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
        <div class="item">5</div>
        <div class="item">6</div>
        <div class="item">7</div>
        <div class="item">8</div>
        <div class="item">9</div>
        <div class="item">10</div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.grid-box{
    display: grid;
    grid-template-rows:100px 100px 100px;
    .item{
        background-color: #fff;
        min-height: 50px;
    }
}
</style>
