import router from '../../router/index'

const install = function (app) {
    app.config.globalProperties.$toPath = function (options) {
        if (typeof options == 'object') {
            router.push(options);
        } else {
            router.push({
                path: options
            })
        }
    }
}

export default install;