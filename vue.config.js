// vant 按需引入插件
const { VantResolver } = require("unplugin-vue-components/resolvers");
const ComponentsPlugin = require("unplugin-vue-components/webpack");

const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
    transpileDependencies: true,
    publicPath: "./",
    configureWebpack: {
        plugins: [
            ComponentsPlugin({
                resolvers: [VantResolver()],
            }),
        ],
    },
    devServer: { // 代理无效，待研究
        proxy: {
            "/api": {
                target: "http://localhost:8778",
                changeOrigin: true,
                ws: true,
                pathRewrite: { '^/api': '' }
            },
        },
    },
});
