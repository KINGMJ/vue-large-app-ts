<template>
  <div>Using with Options API</div>
  <br />
  <component-1 name="这是一个测试组件" :book="book" :callback="log" />
  <component-2 />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Book } from '@/types'
import Component1 from '@/components/demo1/Component1.vue'
import Component2 from '@/components/demo1/Component2.vue'

export default defineComponent({
  data() {
    return {
      message: 'Hello',
      book: {
        title: 'Vue 3 Guide',
        year: 2020
      } as Book
    }
  },
  computed: {
    greeting(): string {
      return this.message + '!'
    },
    greetingUppercased: {
      get(): string {
        return this.greeting.toUpperCase()
      },
      set(newValue: string) {
        this.message = newValue.toUpperCase()
      }
    }
  },
  methods: {
    log() {
      console.log('测试输出')
    }
  },
  components: {
    Component1,
    Component2
  }
})
</script>
