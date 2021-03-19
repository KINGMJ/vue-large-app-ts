<template>
  <div>Symbols类型</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Demo8Service from '@/services/demo8'

export default defineComponent({
  name: 'Demo8',
  setup() {
    Demo8Service.bootstrap()
  }
})
</script>
