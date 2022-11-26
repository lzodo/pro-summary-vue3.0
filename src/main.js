import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vant/lib/index.css'; // 清除一些默认行为
import './assets/fonts/iconfont.css'
import "./rem"


const app = createApp(App);
import MyGlobal from "@/common/js/VuePrototype";
import config from "@/utils/config";

app.config.globalProperties.$config = config.config; 

// import GlobalCpn from "./common/js/GlobalCpn"

app.use(store).use(router).use(MyGlobal).mount('#app')
