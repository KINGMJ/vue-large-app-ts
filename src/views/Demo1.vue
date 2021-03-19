<template>
  <div>TypeScript 基础类型</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Demo1Service from '@/services/demo1'

export default defineComponent({
  name: 'Demo1',
  setup() {
    Demo1Service.bootstrap()
  }
})
</script>
