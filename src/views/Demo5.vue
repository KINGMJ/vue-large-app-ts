<template>
  <div>类</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Demo5Service from '@/services/demo5'

export default defineComponent({
  name: 'Demo5',
  setup() {
    Demo5Service.bootstrap()
  }
})
</script>
