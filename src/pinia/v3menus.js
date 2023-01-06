import { defineStore } from 'pinia';

const useMenus = defineStore('v3menus', {
    state: () => ({
        menuList: [
            { name: "vueuse", path: '/v3menus/vueuse', icon: "iconsen015" },
            { name: "parallax", path: '/v3menus/parallax', icon: "iconweibiaoti-_shoucang-xian" },
            { name: "wait for", path: '/v3menus/vueuse', icon: "iconweibiaoti-_shoucang-xian" },
            { name: "wait for", path: '/v3menus/vueuse', icon: "iconweibiaoti-_shoucang-xian" },
            { name: "wait for", path: '/v3menus/vueuse', icon: "iconweibiaoti-_shoucang-xian" }
        ],
    })
})

export default useMenus;