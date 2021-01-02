<template>
  <div>TypeScript 接口</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Demo2Service from '@/services/demo2.ts'

export default defineComponent({
  name: 'Demo2',
  setup() {
    Demo2Service.bootstrap()
  }
})
</script>
