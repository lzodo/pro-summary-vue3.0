<template>
    <div>
        <!-- vue 自动将count ref对象解包 不能带value，深层对象修改时需要带.value -->
        {{ count }}
        <div>
            {{ infos.username }}
        </div>
    </div>
</template>

<script>
import { ref, reactive } from 'vue';
export default {
    name: "TestPage",
    setup() {
        // ref 简单响应式数据,也可以是复杂类型数据
        let count = ref(100);
        // count 对应 ref对象的value
        count.value++;
        console.log(count.value);


        // reactive 复杂数据类型依赖收集, 不要关心value
        const infos = reactive({
            username: 'lzoxun',
            passwd: '123456'
        })
        infos.username = "abc";

        return {
            count,
            infos
        }
    }
}
</script>