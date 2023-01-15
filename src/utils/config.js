const config = {
    // "proxyUrl": "http://114.115.212.129:8778", // 跨域代理
    "proxyUrl": "http://localhost:8778",
    "baseUrl": process.env.VUE_APP_BASE_API, // 文件地址
    "socketUrl": process.env.VUE_APP_SOCKET_API,
}
  
  module.exports = {
    config
  }