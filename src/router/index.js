import { createRouter, createWebHashHistory } from "vue-router"; // createWebHistory(process.env.BASE_URL) history 模式

const routes = [
    {
        path: "/",
        name: "index",
        component: () =>
            import("../views/Index.vue"),
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
    {
        path: "/groupchat",
        name: "groupchat",
        component: () =>
            import("../views/GroupChat.vue"),
    },
    {
        path: "/user",
        name: "user",
        component: () =>
            import("../views/User.vue"),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    let token = localStorage.getItem("token");
    if (!token && to.path != '/login') {
        console.log(to, "beforeEach to")
        next("/login")
    } else {
        next();
    }
})

export default router;
