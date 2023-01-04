import { defineStore } from 'pinia';

const useMenus = defineStore('v3menus', {
    state: () => ({
        menuList: [
            {name:"vueuse",path:'/v3menu/vueuse',icon:"iconwodewo"},
            {name:"2",path:'/v3menu/vueuse',icon:"iconwodewo"},
            {name:"3",path:'/v3menu/vueuse',icon:"iconwodewo"},
            {name:"4",path:'/v3menu/vueuse',icon:"iconwodewo"},
            {name:"5",path:'/v3menu/vueuse',icon:"iconwodewo"}
        ],
        title:"1234"
    })
})

export default useMenus;