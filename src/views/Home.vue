<template>
  <div class="home">
    <items-list-component :items="items" :loading="loading" @select-item="onSelectItem" />
  </div>
</template>

<script lang="ts">
import ItemsListComponent from '@/components/items/ItemsList.component.vue'
import { computed, defineComponent, onMounted } from 'vue'
import { useItemsStore } from '@/store/items'
import { MutationType } from '@/models/store'
import { ItemInterface } from '@/models/items/Item.interface'

export default defineComponent({
  name: 'Home',
  components: { ItemsListComponent },
  setup() {
    const itemsStore = useItemsStore()
    const onSelectItem = (item: ItemInterface) => {
      itemsStore.action(MutationType.items.selectItem, {
        id: item.id,
        selected: item.selected
      })
    }
    const items = computed(() => {
      return itemsStore.state.items
    })
    const loading = computed(() => {
      return itemsStore.state.loading
    })
    onMounted(() => {
      itemsStore.action(MutationType.items.loadItems)
    })
    return { items, loading, onSelectItem }
  }
})
</script>
