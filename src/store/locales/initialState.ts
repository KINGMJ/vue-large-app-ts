import { LocalesStateInterface } from '@/models/store'

export const initialLocalesState: LocalesStateInterface = {
  availableLocales: [
    {
      name: 'USA',
      locale: 'en-US',
      flag: 'us',
      selected: false
    },
    {
      name: 'Italy',
      locale: 'it-IT',
      flag: 'it',
      selected: true
    },
    {
      name: 'Spain',
      locale: 'es-ES',
      flag: 'es',
      selected: false
    },
    {
      name: 'France',
      locale: 'fr-FR',
      flag: 'fr',
      selected: false
    }
  ]
}
