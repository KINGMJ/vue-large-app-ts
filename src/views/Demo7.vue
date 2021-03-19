<template>
  <div>泛型</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Demo7Service from '@/services/demo7'

export default defineComponent({
  name: 'Demo7',
  setup() {
    Demo7Service.bootstrap()
  }
})
</script>
