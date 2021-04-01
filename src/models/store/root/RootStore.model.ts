import Vuex from 'vuex'
import { RootStoreInterface } from './RootStore.interface'

export class RootStoreModel<S> extends Vuex.Store<RootStoreInterface> {}
