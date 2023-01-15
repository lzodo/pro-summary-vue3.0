# pro-summary-vue3.0
## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## 创建项目要做的事情
### 配置项目信息
1. icon、logo图标，标题
2. 配置jsconfig.json 友好的代码提示 (这个json是可以注释的，vscode有特殊处理)
3. src 下目录结构划分
   1. assets 存放一些静态资源、网络字体等
   2. components 公共组件抽取
   3. common 自定义的公用文件封装，多个项目统通用的组件、方法
   4. hooks 存放hook函数
   5. router
   6. service 网络请求 接口统一调用
   7. store 状态管理
   8. utils 第三方库文件
   9. view/pages 页面视图文件
   10. mock 模拟数据
   11. layout（管理系统布局配置）
4. CSS样式重置
   1. [normalize.css](https://github.com/necolas/normalize.css) 
      1. 有大佬们总结出来，一般开发一个前端项目对一些常见的css自动重置的
      2. `npm install normalize.css --save`
      3. main.js `import "normalize.css"`
   2. reset.css/base.css
      1. 自己初始化一些东西
   3. common.css 
      1. 公共样式
5. SCSS/LESS配置（vite）
   1. SASS 安装 `npm install sass sass-loader -D`  安装好就行了
   2. LESS 安装 `npm install less -D` 安装好就行了
6. 配置路由
   1. `npm install vue-router`
   2. 创建一个 router 导出到main.js use进去
7. pinia
      1. `import { createPinia } from 'pinia'` app.use(createPinia())
      2. store 或 其他任意文件夹都能新建store

8.  必要配置
    1.  字体图标、移动端适配、。。。