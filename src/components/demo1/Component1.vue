<template>
  <div>
    <p>{{ name }}</p>
    <span>{{ book.title }}</span>
  </div>
</template>

<script lang="ts">
import { Book } from '@/types'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    name: String,
    success: { type: String },
    callback: {
      type: Function as PropType<() => void>
    },
    book: {
      type: Object as PropType<Book>,
      default: () => ({
        title: 'Arrow Function Expression'
      }),
      validator: (book: Book) => !!book.title,
      require: true
    }
  },
  mounted() {
    this.callback()
  }
})
</script>
