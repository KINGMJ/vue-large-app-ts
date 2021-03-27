/**
 * 使用工厂模式为不同的环境选择对应的apiClient
 */
import { ApiClientInterface } from '@/models/api-client/ApiClient.interface'

import apiMockClient from './mock'
import apiLiveClient from './live'

let env: string = 'mock'
if (process.env && process.env.VUE_APP_API_CLIENT) {
  env = process.env.VUE_APP_API_CLIENT.trim()
}

console.log(env)

let apiClient: ApiClientInterface
if (env === 'live') {
  apiClient = apiLiveClient
} else {
  apiClient = apiMockClient
}

export default apiClient
