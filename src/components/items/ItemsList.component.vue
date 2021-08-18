<template>
  <div>
    <h3>Items - loading: {{ loading }}</h3>
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
    console.log(emit)
    const onItemSelect = (item: ItemInterface) => {
      item.selected = !item.selected
      console.log('onItemSelect', item.id, item.selected)
      emit('select-item', item)
    }
    return {
      onItemSelect
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
