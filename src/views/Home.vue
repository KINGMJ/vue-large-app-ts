<template>
  <div class="home">
    <items-list-component :items="items" />
  </div>
</template>

<script lang="ts">
import ItemsListComponent from '@/components/items/ItemsList.component.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home',
  components: { ItemsListComponent },
  setup() {
    const items: any[] = [
      {
        id: 1,
        name: 'Item 1'
      },
      {
        id: 2,
        name: 'Item 2'
      },
      {
        id: 3,
        name: 'Item 3'
      }
    ]

    return { items }
  }
})
</script>
