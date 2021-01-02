<template>
  <div>类类型</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Demo4Service from '@/services/demo4.ts'

export default defineComponent({
  name: 'Demo4',
  setup() {
    Demo4Service.bootstrap()
  }
})
</script>
