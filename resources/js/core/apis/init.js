import axios from 'axios'

const csrfToken = document.head.querySelector('meta[name="csrf-token"]')

if (csrfToken) {
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken.content
} else {
    console.error('CSRF token not found')
}

const axiosInstance = axios.create({
    baseURL: '/api'
});

axiosInstance.interceptors.request.use(
    config => {
        config.headers['X-Requested-With'] = 'XMLHttpRequest'
        return config
    },
    error => {
        return Promise.reject(error)
    })

axiosInstance.interceptors.response.use(
    response => {
        let data = response.data
        return Promise.resolve(data)
    },
    error => {
        let data = error.response.data
        return Promise.reject(data)
    })

export default axiosInstance
export { axios }
