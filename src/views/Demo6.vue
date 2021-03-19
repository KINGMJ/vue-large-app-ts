<template>
  <div>函数</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Demo6Service from '@/services/demo6'

export default defineComponent({
  name: 'Demo6',
  setup() {
    Demo6Service.bootstrap()
  }
})
</script>
