import sinon from 'sinon'
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
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
      statusCode: 400,
      statusText: 'Error',
      requestConfig: mockedRequestConfig,
      data: 'get completed with errors',
      reject: true
    })

    sinon
      .stub(axios, 'get')
      .withArgs(mockParams.url, mockedRequestConfig)
      .returns(mockedPromise)
  })

  afterAll(() => {
    sinon.restore()
  })

  it('should reject and return 400', done => {
    HttpClient.get<string>(mockParams)
      .then()
      .catch((response: AxiosResponse) => {
        expect(response.status).toStrictEqual(400)
        done()
      })
  })
})
