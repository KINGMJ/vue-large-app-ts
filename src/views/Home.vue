<template>
  <div class="home">
    <items-list-component :items="items" :loading="loading" @select-item="onSelectItem" />
  </div>
</template>

<script lang="ts">
import ItemsListComponent from '@/components/items/ItemsList.component.vue'
import { computed, defineComponent, onMounted } from 'vue'
import store from '@/store'
import { ItemInterface } from '@/models/items/Item.interface'

export default defineComponent({
  name: 'Home',
  components: { ItemsListComponent },
  setup() {
    const onSelectItem = (item: ItemInterface) => {
      store.dispatch('selectItem', {
        id: item.id,
        selected: item.selected
      })
    }
    const items = computed(() => {
      return store.state.items
    })
    const loading = computed(() => {
      return store.state.loading
    })
    onMounted(() => {
      store.dispatch('loadItems')
    })
    return { items, loading, onSelectItem }
  }
})
</script>
