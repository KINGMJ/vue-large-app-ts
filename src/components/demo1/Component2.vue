<template>
  <div>{{ year }}</div>
  <p>{{ book.title }}</p>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref } from 'vue'
import { Book } from '@/types'

export default defineComponent({
  setup() {
    const year = ref<string | number>('2020')
    year.value = 2020
    // const book = reactive<Book>({ title: 'ES6指南' })
    // const book = reactive({ title: 'ES6指南' })
    const book = reactive({ title: 'ES6指南' }) as Book

    const count = ref(1)
    const doubleCount = computed(() => count.value * 2)
    // error
    // const result = doubleCount.value.split('')
    console.log(doubleCount)
    return {
      year,
      book
    }
  }
})
</script>
