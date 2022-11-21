// vant 按需引入插件
const { VantResolver } = require("unplugin-vue-components/resolvers");
const ComponentsPlugin = require("unplugin-vue-components/webpack");

// 全局配置
const { config } = require("./src/utils/config")
console.log(config.baseUrl);

const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
    transpileDependencies: true,
    publicPath: "./",
    configureWebpack: { // 配置webpack相关信息
        plugins: [
            ComponentsPlugin({
                resolvers: [VantResolver()],
            }),
        ],
        resolve: {
            // alias: {  // 配置别名
            //     "@/*": ["src/*"]
            // }
        },
    },
    devServer: { // 代理无效，待研究
        proxy: {
            "/api": {
                target: config.baseUrl,
                // target: "http://114.115.212.129:8778",
                // target: "http://localhost:8778",
                changeOrigin: true,
                ws: true,
                pathRewrite: { '^/api': '' }
            },
        },
    },
});
