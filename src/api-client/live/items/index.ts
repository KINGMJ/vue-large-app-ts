import { ItemsApiClientUrlsInterface, ItemsApiClientInterface, ItemsApiClientModel } from '@/models/api-client/items'

const urls: ItemsApiClientUrlsInterface = {
  // 这里改成真实的 api point
  fetchItems: '/static/data/items.json'
}

const itemsApiClient: ItemsApiClientInterface = new ItemsApiClientModel(urls)

export default itemsApiClient
