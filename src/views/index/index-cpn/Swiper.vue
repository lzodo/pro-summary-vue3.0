<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="swiperwarp">
        <swiper
            :slides-per-view="1"
            :space-between="20"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            :pagination="true"
            :modules="modules"
            class="mySwiper"
        >
            <swiper-slide v-for="item in bannerList" :key="item.url">
                <!-- <img class="swiper-img" :src="require(`../assets/images/banner/${item.url}`)" alt=""> -->
                <van-image
                    class="swiper-img"
                    fit="cover"
                    :src="require(`@/assets/images/banner/${item.url}`)"
                />
            </swiper-slide>
        </swiper>
    </div>
</template>

<script setup>
import useSwiper from "@/hooks/useSwiper";
const { Swiper, SwiperSlide, modules, bannerList, onSwiper, onSlideChange } =
    useSwiper();
</script>

<style lang="scss" scoped>
.swiperwarp{
    width: 100%;
    height: 160px;
}
.swiper {
    height: inherit;
    .swiper-slide {
        width: inherit;
        height: inherit;
    }
    .swiper-img {
        width: 100%;
        height: 100%;
    }
}
</style>
