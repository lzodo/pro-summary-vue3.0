import request from '@/utils/request'

// 测试
export function signin(data) {
    return request({
        url: '/users/login',
        headers:{
            notToken:true
        },
        data: data,
        method: 'post',
    })
}