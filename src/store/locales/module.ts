import { Module, MutationTree, ActionTree, GetterTree } from 'vuex'
import { MutationType, RootStateInterface, LocalesStateInterface } from '@/models/store'
import { initialLocalesState } from './initialState'
import { i18n } from '@/plugins/vue-i18n-next-plugin'

const mutations: MutationTree<LocalesStateInterface> = {
  selectLocale(state: LocalesStateInterface, localeId: string) {
    state.availableLocales.forEach(localeInfo => {
      localeInfo.selected = localeInfo.locale === localeId
      if (localeInfo.selected) {
        i18n.global.locale = localeInfo.locale
      }
    })
  }
}

const actions: ActionTree<LocalesStateInterface, RootStateInterface> = {
  selectLocale({ commit }, localeId: string) {
    commit(MutationType.locales.selectLocale, localeId)
  }
}

const getters: GetterTree<LocalesStateInterface, RootStateInterface> = {}

const namespaced: boolean = true
const state: LocalesStateInterface = initialLocalesState

export const localesState: Module<LocalesStateInterface, RootStateInterface> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
}
