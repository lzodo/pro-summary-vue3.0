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
    app.config.globalProperties.$repPath = function (options) {
        if (typeof options == 'object') {
            router.replace(options);
        } else {
            router.replace({
                path: options
            })
        }
    }
}

export default install;