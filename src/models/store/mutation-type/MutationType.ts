import { ItemsMutationType } from '../items/ItemsMutationType'
import { LocalesMutationType } from '../locales/LocalesMutationType'
// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace MutationType {
  export const items = ItemsMutationType
  export const locales = LocalesMutationType
}
