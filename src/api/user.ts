import request from '@/utils/request'

// 查询用户列表(数据从本地json获取)
export const listUser = () => {
  return request({
      url: '/users',
      method: 'get',
  })
}