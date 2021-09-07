import { configsMap } from '@/config'

describe('configsMap', () => {
  it('instance should have "mock" key', () => {
    expect(configsMap.has('mock')).toStrictEqual(true)
  })

  it('instance should have "local" key', () => {
    expect(configsMap.has('local')).toStrictEqual(true)
  })

  it('instance should have "beta" key', () => {
    expect(configsMap.has('beta')).toStrictEqual(true)
  })

  it('instance should have "live" key', () => {
    expect(configsMap.has('live')).toStrictEqual(true)
  })
})
