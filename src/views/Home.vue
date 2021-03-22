<template>
  <div class="home">
    <items-list-component :items="items" />
  </div>
</template>

<script lang="ts">
import ItemsListComponent from '@/components/items/ItemsList.component.vue'
import { ItemInterface } from '@/models/items/Item.interface'
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'Home',
  components: { ItemsListComponent },
  setup() {
    const items: ItemInterface[] = reactive([
      {
        id: 1,
        name: 'Item 1',
        selected: false
      },
      {
        id: 2,
        name: 'Item 2',
        selected: false
      },
      {
        id: 3,
        name: 'Item 3',
        selected: false
      }
    ])

    return { items }
  }
})
</script>
