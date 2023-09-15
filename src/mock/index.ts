import Mock from 'mockjs'
import userList from './user.json'

// 模拟生成数据
const data = Mock.mock({
  'data|5': [
    {
      //生成id，自增10，起始值100
      'id|+10': 100,
      //随机生成姓名（中文）
      name: '@cname',
      phone: /^1(3|4|5|6|7|8|9)[0-9]\d{8}$/,
      //随机邮箱
      email: '@email'
    }
  ]
})

console.log(data)

// 获取用户数据（数据从user.json文件获取）
Mock.mock('/mock/users', { code: 200, data: userList })
