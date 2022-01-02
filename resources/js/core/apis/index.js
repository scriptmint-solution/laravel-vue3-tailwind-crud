import request from "./init"

export function list(url) {
    return request({
        url: url,
        method: 'get',
    })
}

export function store(url, data) {
    return request({
        url: url,
        method: 'post',
        data
    })
}

export function get(url, id) {
    return request({
        url: `${url}/${id}`,
        method: 'get'
    })
}

export function update(url, id, data) {
    return request({
        url: `${url}/${id}`,
        method: 'patch',
        data
    })
}

export function destroy(url, id) {
    return request({
        url: `${url}/${id}`,
        method: 'delete',
    })
}
