import request from '@/utils/request'

// 测试
export function getDynamecList(params) {
    return request({
        url: '/api/dynamic',
        params: params,
        method: 'get',
    })
}

export function addDynamic(data) {
    return request({
        url: '/api/dynamic',
        data: data,
        method: 'post',
    })
}

export function removeDynamic(id) {
    return request({
        url: `/api/dynamic/${id}`,
        method: 'delete',
    })
}

export function uploadsPicture(data) {
    return request({
        url: `/api/uploads/${data.id}/picture`,
        headers: {
            "Content-Type": "multipart/form-data",
        },
        data: data.files,
        method: 'post',
    })
}