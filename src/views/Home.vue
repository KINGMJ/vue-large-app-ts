<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <DemoPreview msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import DemoPreview from '@/components/DemoPreview.vue' // @ is an alias to /src

@Options({
  components: {
    DemoPreview
  }
})
export default class Home extends Vue {}
</script>
