import { reactive } from "vue";
// 使用swiper
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

// 下面的点
import "swiper/css/pagination";
import { Pagination } from "swiper";

export default function useCounter() {

    let modules = reactive([Pagination]);
    let bannerList = reactive([
        { url: "4.png" },
        { url: "5.png" },
        { url: "1.jpg" },
        { url: "2.jpg" },
        { url: "3.jpg" },
    ]);

    const onSwiper = (swiper) => {
        console.log(swiper);
    };
    const onSlideChange = () => {
        console.log("slide change");
    };

    return {
        Swiper, SwiperSlide, modules, bannerList, onSwiper, onSlideChange
    }
}
