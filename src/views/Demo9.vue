<template>
  <div>其他</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Demo9Service from '@/services/demo9/demo9'

export default defineComponent({
  name: 'Demo9',
  setup() {
    Demo9Service.bootstrap()
  }
})
</script>
