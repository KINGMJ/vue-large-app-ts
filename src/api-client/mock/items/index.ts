import { ItemsApiClientUrlsInterface, ItemsApiClientInterface, ItemsApiClientModel } from '@/models/api-client/items'
import Mock from '../config'

Mock.mock('fetchItems', 'get', () => {
  const data = Mock.mock({
    'array|4-10': [
      {
        'id|1-100': 100,
        name: '@name',
        'selected|1': false
      }
    ]
  })
  return data.array
})

const urls: ItemsApiClientUrlsInterface = {
  fetchItems: 'fetchItems'
}

const itemsApiClient: ItemsApiClientInterface = new ItemsApiClientModel(urls)

export default itemsApiClient
