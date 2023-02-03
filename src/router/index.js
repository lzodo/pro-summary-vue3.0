import { createRouter, createWebHashHistory } from "vue-router"; // createWebHistory(process.env.BASE_URL) history 模式

const routes = [
    {
        path: "/",
        redirect: '/index'
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
            import("../views/index/index.vue"),
    },
    {
        path: "/dynamic",
        name: "dynamic",
        component: () =>
            import("../views/Dynamic.vue"),
    },
    {
        path: "/dynamic-add",
        name: "dynamic-add",
        component: () =>
            import("../views/DynamicAdd.vue"),
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
    {
        path: "/user-edit",
        name: "user-edit",
        component: () =>
            import("../views/UserEdit.vue"),
    },
    {
        path: "/v3menus",
        name: "v3menus",
        children: [
            {
                path: "",
                component: () =>
                    import("../views/v3menus.vue"),
            },
            {
                path: "vueuse",
                component: () =>
                    import("../views/v3menus/vueuse.vue"),
            },
            {
                path: "parallax",
                component: () =>
                    import("../views/v3menus/parallax-js.vue"),
            }
        ]
    },
    {
        path: "/test",
        name: "test",
        component: () =>
            import("../views/Test.vue"),
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
