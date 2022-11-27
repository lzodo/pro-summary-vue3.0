<template>
    <div class="page header-page dyadd-page">
        <si-header title="" isback="-1">
            <template v-slot:right>
                <div class="f-center" style="height: 100%;" @click="publish">
                    <van-button type="success" size="mini">发表</van-button>
                </div>
            </template>
        </si-header>
        <van-field v-model="dynamicinfo" rows="4" autosize type="textarea" maxlength="100" placeholder="请输入内容"
            show-word-limit />

        <div class="upload-list">
            <van-uploader v-model="fileList" multiple max-count="9" />
        </div>
    </div>
</template>

<script>
import { Toast, Dialog } from 'vant';
import SiHeader from "@/components/SimpleHeader";
import { addDynamic, uploadsPicture } from "@/api/dynamic"
export default {
    name: "DynamicAdd",
    data() {
        return {
            dynamicinfo: "",
            fileList: [],
        }
    },
    components: {
        SiHeader,

    },
    methods: {
        publish() {
            if (this.dynamicinfo == "") {
                Toast.fail('失败文案');
                Dialog({ message: '内容必填' });
                return
            }
            addDynamic({ content: this.dynamicinfo }).then(res => {
                if (this.fileList.length > 0) {
                    this.addPics(res.result.insertId);
                } else {
                    this.$repPath("/dynamic")
                }
            })
        },
        addPics(dyId) {
            let fileFormData = new FormData();
            this.fileList.forEach((item)=>{
                console.log(item.file);
                fileFormData.append("files",item.file);
            })
            uploadsPicture({id:dyId,files:fileFormData}).then(()=>{
                this.$repPath("/dynamic")
            })
        },

    },
    mounted() {

    },
};
</script>

<style lang="scss" scoped>
@import "@/common/style/mixin.scss";

.upload-list {
    padding: 10px;
}

.dyadd-page {
    background-color: #fff;
}
</style>
