import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vant/lib/index.css'; // 清除一些默认行为
import './assets/fonts/iconfont.css'
import "./rem"


import MyGlobal from "./common/js/vueprototype";

createApp(App).use(store).use(router).use(MyGlobal).mount('#app')
