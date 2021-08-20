<template>
  <div>
    <h3>{{ t('items.list.header') }} - loading: {{ loading }}</h3>
    <loader-component v-show="loading" />
    <ul>
      <item-component v-for="item in items" :key="item.id" :model="item" @select="onItemSelect" />
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { ItemInterface } from '@/models/items/Item.interface'
import ItemComponent from '@/components/items/children/Item.component.vue'
import LoaderComponent from '@/components/shared/Loader.component.vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  components: {
    ItemComponent,
    LoaderComponent
  },
  props: {
    items: {
      type: Array as PropType<ItemInterface[]>
    },
    loading: {
      type: Boolean
    }
  },
  setup(props, { emit }) {
    const { t } = useI18n()
    const onItemSelect = (item: ItemInterface) => {
      item.selected = !item.selected
      emit('select-item', item)
    }
    return {
      onItemSelect,
      t
    }
  }
})
</script>

<style lang="scss">
ul {
  list-style-type: none;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
}
</style>
