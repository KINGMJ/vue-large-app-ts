import { createStore, StoreOptions } from 'vuex'
import { RootStateInterface, RootStoreModel } from '@/models/store'
import { initialRootState } from './initialState'
import { itemsState } from '@/store/items'

const storeOptions: StoreOptions<RootStateInterface> = {
  state: initialRootState,
  modules: {
    itemsState
  }
}

export const store: RootStoreModel<RootStateInterface> = <any>createStore(storeOptions)
