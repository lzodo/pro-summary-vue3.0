import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Pinia from './pinia'
import 'vant/lib/index.css'; // 清除一些默认行为
import './assets/fonts/iconfont.css'
import "./rem"
// import "./utils/axios"
// import Lzo from "./utils/axios"
// Lzo.get({ url: `/juhe/video/update`, params: { id: 1 } }).then(res => {
//     console.log(res,38)
// })


const app = createApp(App);
import MyGlobal from "@/common/js/VuePrototypes";
import config from "@/utils/config";

app.config.globalProperties.$config = config.config; 

// import GlobalCpn from "./common/js/GlobalCpn"

app.use(store).use(Pinia).use(router).use(MyGlobal).mount('#app')
