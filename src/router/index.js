import { createRouter, createWebHashHistory } from "vue-router"; // createWebHistory(process.env.BASE_URL) history 模式
import HomeView from "../views/HomeView.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    // {
    //     path: "/about",
    //     name: "about",
    //     component: () =>
    //         import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    // },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
