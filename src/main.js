import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vant/lib/index.css'; // 清除一些默认行为
import "./rem"



createApp(App).use(store).use(router).mount('#app')
