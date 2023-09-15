import axios from 'axios'

// 创建axios实例
const service = axios.create({
  baseURL: '/mock',
  headers: {},
  timeout: 30000
})

// 请求拦截器
service.interceptors.request.use((config) => {
  return config
}, err => {
  Promise.reject(err)
})

// 响应拦截
service.interceptors.response.use((res) => {
  return  Promise.resolve(res.data)
}, err => {})

export default service