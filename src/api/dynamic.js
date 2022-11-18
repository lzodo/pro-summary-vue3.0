import request from '@/utils/request'

// 测试
export function getDynamecList(params) {
    return request({
        url: '/dynamic',
        params: params,
        method: 'get',
    })
}