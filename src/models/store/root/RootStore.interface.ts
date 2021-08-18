import { ItemsStateInterface } from '../items/ItemsState.interface'
import { LocalesStateInterface } from '../locales/LocalesState.interface'
export interface RootStoreInterface {
  itemsState: ItemsStateInterface
  localesState: LocalesStateInterface
}
