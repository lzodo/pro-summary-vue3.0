import axios from "axios";
import { tansParams } from "./tool";
import errorCode from "@/utils/errorCode";
import { Notify } from 'vant';



// 创建axios实例
// const service = axios.create({
//     baseURL:process.env.VUE_APP_BASE_API,    // 代理无效
//     timeout: 10000,
// });

let baseURL = "/";
if (process.env.NODE_ENV === 'production') {
    baseURL = process.env.VUE_APP_BASE_API;
}

const service = axios.create({
    baseURL,
    timeout: 10000,
})

// request拦截器
service.interceptors.request.use(
    (config) => {
        if (!config.headers.notToken) {
            config.headers.token = localStorage.getItem("token");
        }

        if(process.env.NODE_ENV === 'production'){
            config.url = config.url.replace(/^\/api/,"");
        }

        // get请求映射params参数
        if (config.method === "get" && config.params) {
            console.log(config.url, "config.url");
            let url = config.url + "?" + tansParams(config.params);
            url = url.slice(0, -1);
            config.params = {};
            config.url = url;
        }

        console.log(config);
        return config;
    },
    (error) => {
        console.log(error);
        Promise.reject(error);
    }
);

// 响应拦截器
service.interceptors.response.use(
    (res) => {
        // 未设置状态码则默认成功状态
        const code = res.data.code || 200;
        // 获取错误信息
        const msg = errorCode[code] || res.data.msg || errorCode["default"];
        // 二进制数据则直接返回
        if (
            res.request.responseType === "blob" ||
            res.request.responseType === "arraybuffer"
        ) {
            return res.data;
        }
        if (code === 401) {
            console.log("==401", msg);
            return Promise.reject("无效的会话，或者会话已过期，请重新登录。");
        } else if (code === 500) {
            console.log("==500", msg);
            if (!res.config.headers.noterrdialog) {
                Notify(msg);
            }
            return Promise.reject(new Error(msg));
        } else if (code !== 200) {
            console.log("!=200", msg);
            if (!res.config.headers.noterrdialog) {
                Notify(msg);
            }
            return Promise.reject(new Error(msg))
        } else {

            if (res.config.headers.successdialog) {
                let dialogMsg = res.config.headers.successMsg || '操作成功';
                Notify({ type: 'success', message: decodeURIComponent(dialogMsg) });
            }
            return res.data;
        }
    },
    (error) => {
        console.log("err" + error);
        let { message } = error;
        if (message == "Network Error") {
            message = "后端接口连接异常";
        } else if (message.includes("timeout")) {
            message = "系统接口请求超时";
        } else if (message.includes("Request failed with status code")) {
            message = "系统接口" + message.substr(message.length - 3) + "异常";
        }

        Notify({
            message: message,
            duration: 5000,
        });

        console.log(message);
        return Promise.reject(error);
    }
);

export default service;


// import Toast from '@vant/weapp/toast/toast';
// import Notify from '@vant/weapp/notify/notify';

// const { queryString } = require("./util");
// const { config } = require("./config");

// class MYRequest {
//   constructor(baseURL) {
//     this.baseURL = baseURL;
//   }
//   request(options) {
//     const { url, method, header, data, dialog, sumsg, params } = options;
//     let dialogToast = dialog ?? false;

//     let headerData = header || {};
//     headerData.token = wx.getStorageSync('token');
//     headerData["Content-Type"] = headerData["Content-Type"] ? headerData["Content-Type"] : "application/json";

//     let urlstr = this.baseURL + url;
//     if (params) {
//       urlstr += queryString(params);
//     }

//     return new Promise((resolve, reject) => {
//       wx.request({
//         url: urlstr,
//         data: data ? data : {},
//         method: method ? method : "post",
//         header: headerData,
//         params: params,
//         success: (res) => {
//           if (res.data.code != 0) {
//             // Toast(res.data.msg);
//             Notify({ type: 'danger', message: res.data.msg });
//             reject(res.data.msg);
//           } else {
//             if (dialogToast) {
//             //   Toast(sumsg || "操作成功!");
//               Notify({ type: 'success', message: sumsg || "操作成功!" });
//             }
//             resolve(res.data);
//           }
//         },
//         fail: (err) => {
//         //   Toast("err");
//           Notify({ type: 'danger', message: sumsg || "err" });
//           reject(err);
//         }
//       })
//     })
//   }

//   uploadFile(options){
//     let { url ,file, key, header} = options;
//     let paipath = this.baseURL + url;
//     let apikey = key||"files";
//     let headerData = header || {};
//     headerData.token = wx.getStorageSync('token');
//     headerData["Content-Type"] = headerData["Content-Type"] ? headerData["Content-Type"] : "application/json";

//     return new Promise((resolve,reject) => {
//       wx.uploadFile({
//         url: paipath, //开发者服务器地址
//         filePath: file.url, // 要上传文件资源的路径 (本地路径)
//         name: apikey, // 文件对应的 key
//         // formData: { user: 'test' }, // HTTP 请求中其他额外的 form data
//         header: headerData,
//         success(res) {
//           // 上传完成需要更新 fileList
//           resolve(res);
//         },
//         fail(err){
//           Notify({ type: 'danger', message: err || "err" });
//           reject(err);
//         }
//       });
//     })
//   }
// }

// export const API = new MYRequest(config.baseUrl);