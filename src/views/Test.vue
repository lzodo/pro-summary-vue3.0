<template>
    <div>
        <!-- vue 自动将count ref对象解包 不能带value，深层对象修改时需要带.value -->
        {{ count }} - {{ plusOne }}
        <div>
            {{ infos.username }}
        </div>
        {{ readonlys }}
        <TestCpn class="ls" :infos="infos" @changeName=changeName></TestCpn>

        <h2 ref="domh2Re">refdom</h2>
    </div>
</template>

<script>
import { ref, reactive, readonly, isProxy, computed, onMounted } from 'vue';
import TestCpn from "./TestCpn.vue"
export default {
    name: "TestPage",
    components: {
        TestCpn
    },
    setup() {
        // ref 简单响应式数据,也可以是复杂类型数据
        let count = ref(100);
        // count 对应 ref对象的value
        count.value++;
        console.log(count.value);
        const plusOne = computed(() => count.value + 1)


        // reactive 复杂数据类型依赖收集, 不要关心value
        const infos = reactive({
            username: 'lzoxun',
            passwd: '123456'
        })
        infos.username = "abc";

        const readonlys = readonly({
            username: "789"
        })
        readonlys.username = "456";

        const changeName = (data) => {
            infos.username = data;
        }

        console.log(isProxy(infos))

        const domh2Re = ref();
        onMounted(() => {
            console.log(domh2Re.value, 3333333)
        })

        watchEffect(()=>{
            
        }) 


        return {
            count,
            infos,
            readonlys,
            changeName,
            plusOne,
            domh2Re
        }
    }
}
</script>