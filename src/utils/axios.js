import axios from "axios";

class LzoRequest {
    constructor() {
        let baseURL = "/";
        if (process.env.NODE_ENV === 'production') {
            baseURL = process.env.VUE_APP_BASE_API;
        }

        this.service = axios.create({
            baseURL: process.env.VUE_APP_BASE_API,
            timeout: 10000,
        })

        /* 请求拦截 请求之前，拦截提交的配置，处理完再继续发送 */
        this.service.interceptors.request.use((config) => {
            console.log("请求成功拦截回调")
            config.headers['token'] = 'xxxx';

            return config;
        }, (err) => {
            console.log("请求失败拦截回调")
        })

        /* 响应拦截 响应给用户之前，拦截响应的数据，处理完成在继续响应*/
        this.service.interceptors.response.use((res) => {
            console.log("响应成功回调")
            return res.data;
        }, (err) => {
            console.log("响应失败回调")
        })
    }
    request(config) {
        return new Promise((resolve, reject) => {
            this.service.request(config).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    }

    get(config) {
        return this.request({ ...config, method: "get" })
    }

    post(config) {
        return this.request({ ...config, method: "post" })
    }
}

let lzor = new LzoRequest();

lzor.get({ url: `/juhe/video/update`, params: { id: 1 } }).then(res => {
    console.log(res,37)
})

export default lzor;

// import Lzo from "./utils/axios"
// Lzo.get({ url: `/juhe/video/update`, params: { id: 1 } }).then(res => {
//     console.log(res,38)
// })

