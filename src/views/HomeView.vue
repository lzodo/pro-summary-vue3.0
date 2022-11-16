<template>
    <div class="home">
        <!-- <van-button type="primary">主要按钮</van-button> -->
        <div class="test">
          <div class="item">1</div>
          <div class="item">2</div>
          <div class="item">3</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeView",
};
</script>

<style lang="scss" scoped>
@import "../common/style/mixin.scss";
.test {
    width: 100%;
    @include f-jc;
}
</style>
