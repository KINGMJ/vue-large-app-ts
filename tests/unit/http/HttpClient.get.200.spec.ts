import sinon from 'sinon'
import axios, { AxiosRequestConfig } from 'axios'
import { HttpClient, HttpRequestParamsInterface } from '@/models/http-client'
import { MockedPromiseFactory } from './MockedPromiseFactory'

const mockParams: HttpRequestParamsInterface = {
  url: 'path/to/a/get/api/endpoint',
  requiresToken: false
}

describe('HttpClient.get', () => {
  beforeAll(() => {
    const mockedRequestConfig = {
      headers: {}
    } as AxiosRequestConfig

    const mockedPromise = MockedPromiseFactory({
      url: mockParams.url,
      statusCode: 200,
      statusText: 'Success',
      requestConfig: mockedRequestConfig,
      data: 'get completed',
      reject: false
    })

    sinon
      .stub(axios, 'get')
      .withArgs(mockParams.url, mockedRequestConfig)
      .returns(mockedPromise)
  })

  afterAll(() => {
    sinon.restore()
  })

  it('should succeed and return data', done => {
    HttpClient.get<string>(mockParams).then((response: string) => {
      expect(response).toStrictEqual('get completed')
      done()
    })
  })
})
