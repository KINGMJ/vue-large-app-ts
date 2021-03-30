import { HttpClientInterface } from './HttpClient.interface'
import { HttpClientModel } from './HttpClient.model'

/**
 * 把 HttpClientModel 单例导出为 HttpClient
 */
export const HttpClient: HttpClientInterface = new HttpClientModel()
