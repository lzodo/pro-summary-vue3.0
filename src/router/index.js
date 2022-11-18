import { createRouter, createWebHashHistory } from "vue-router"; // createWebHistory(process.env.BASE_URL) history 模式
import HomeView from "../views/HomeView.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/login",
        name: "login",
        component: () =>
            import("../views/Login.vue"),
    },
    {
        path: "/index",
        name: "index",
        component: () =>
            import("../views/Index.vue"),
    },
    {
        path: "/dynamic",
        name: "dynamic",
        component: () =>
            import("../views/Dynamic.vue"),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
