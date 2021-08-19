<template>
  <div id="app">
    <h2>{{ t('welcome') }}</h2>
    <locale-selector :availableLocales="availableLocales" @clicked="onLocaleClicked" />
    <div id="nav" class="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { MutationType } from '@/models/store'
import { useLocalesStore } from '@/store/locales'
import { LocaleInfoInterface } from '@/models/localization/LocalInfo.interface'
import LocaleSelector from './components/locale-selector/LocaleSelector.component.vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  components: { LocaleSelector },
  name: 'App',
  setup() {
    const { t } = useI18n()
    const localesStore = useLocalesStore()

    const availableLocales = computed(() => {
      return localesStore.state.availableLocales
    })

    const onLocaleClicked = (localeInfo: LocaleInfoInterface) => {
      localesStore.action(MutationType.locales.selectLocale, localeInfo.locale)
    }

    return {
      t,
      availableLocales,
      onLocaleClicked
    }
  }
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  h2 {
    margin: 0;
  }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
