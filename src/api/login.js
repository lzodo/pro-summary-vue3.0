import request from '@/utils/request'

// 登录
export function signin(data) {
    return request({
        url: '/api/users/login',
        headers:{
            notToken:true,  // 是否不需要token
            successdialog:true, // 成功默认不需要弹窗，true 需要
            successMsg: encodeURIComponent("登录成功"), // 设置成功弹窗文字 (header中放入了中文，所以就会出现编码格式问题)
            noterrdialog:false , // 错误默认需要弹窗，true 不需要
        },
        data: data,
        method: 'post',
    })
}

// 注册
export function signup(data) {
    return request({
        url: '/api/users/adduser',
        headers:{
            notToken:true,  // 是否不需要token
            successdialog:true, // 成功默认不需要弹窗，true 需要
            successMsg: encodeURIComponent("注册成功"), 
        },
        data: data,
        method: 'post',
    })
}