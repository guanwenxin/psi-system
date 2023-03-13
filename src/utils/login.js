import axios from 'axios'

const TEST_URL = 'http://127.0.0.1:3000/api'

const login = axios.create({
    baseURL: TEST_URL,
    timeout: 1000,
})

// 拦截器
login.interceptors.request.use((config) => {
    if (config.url === '/login') {
        return config;
    }
    config.headers['token'] = sessionStorage.getItem('token')
    console.log('interceptors', config)
    return config;
})


export {
    login
}