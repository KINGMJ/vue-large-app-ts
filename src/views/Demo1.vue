<template>
  <div>This is test</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Demo1Service from '@/services/demo1.ts'

export default defineComponent({
  name: 'Demo1',
  setup() {
    Demo1Service.bootstrap()
  }
})
</script>
