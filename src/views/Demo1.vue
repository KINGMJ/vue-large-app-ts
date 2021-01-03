<template>
  <div>Using with Options API</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface Book {
  title: string
  author: string
  year: number
}

export default defineComponent({
  name: 'Demo1',
  data() {
    return {
      book {}
    }
  }
})
</script>
