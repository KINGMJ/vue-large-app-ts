import Mock from 'mockjs'
/**
 * mockjs配置，拦截 Ajax 请求，设置超时时间
 */
Mock.setup({
  timeout: '200-1000'
})

export default Mock
