import { createStore } from 'vuex'
import { ItemInterface } from '@/models/items/Item.interface'
import { ItemsStateInterface } from '@/models/store/ItemsState.interface'

const state: ItemsStateInterface = {
  loading: false,
  items: []
}

export default createStore({
  state: state,
  mutations: {
    loadingItems(state: ItemsStateInterface) {
      state.loading = true
      state.items = []
    },
    loadedItems(state: ItemsStateInterface, items: ItemInterface[]) {
      state.items = items
      state.loading = false
    }
  },
  actions: {
    loadItems({ commit }) {
      commit('loadingItems')
      const mockItems: ItemInterface[] = [
        {
          id: 1,
          name: 'Item 1',
          selected: false
        },
        {
          id: 2,
          name: 'Item 2',
          selected: false
        },
        {
          id: 3,
          name: 'Item 3',
          selected: false
        }
      ]
      // 用setTimeout模拟一个后端请求
      setTimeout(() => {
        commit('loadingItems', mockItems)
      }, 1000)
    }
  },
  modules: {}
})
