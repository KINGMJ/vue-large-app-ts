import { LocalesStateInterface } from '@/models/store'

export const initialLocalesState: LocalesStateInterface = {
  availableLocales: [
    {
      name: 'USA',
      locale: 'en-US',
      flag: 'US',
      selected: false
    },
    {
      name: 'Italy',
      locale: 'it-IT',
      flag: 'IT',
      selected: true
    },
    {
      name: 'Spain',
      locale: 'es-ES',
      flag: 'ES',
      selected: false
    },
    {
      name: 'France',
      locale: 'fr-FR',
      flag: 'FR',
      selected: false
    }
  ]
}
