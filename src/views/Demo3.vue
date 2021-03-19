<template>
  <div>可索引的类型</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Demo3Service from '@/services/demo3'

export default defineComponent({
  name: 'Demo3',
  setup() {
    Demo3Service.bootstrap()
  }
})
</script>
