import { ItemsApiClientUrlsInterface } from '@/models/api-client/items'

export interface ConfigInterface {
  global: {}
  httpClient: {
    tokenKey: string
  }
  apiClient: {
    type: string
  }
  items: {
    apiUrls: ItemsApiClientUrlsInterface
  }
}
