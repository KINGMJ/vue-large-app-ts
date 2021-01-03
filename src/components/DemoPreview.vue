<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>网站参考</h3>
    <ul>
      <li><a href="https://v3.vuejs.org/guide/introduction.html" target="_blank" rel="noopener">vue3</a></li>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
    <h3>TypeScript 示例代码</h3>
    <ul>
      <li v-for="(item, index) in demos" :key="index">
        <a :href="`/demo${index + 1}`" rel="noopener">{{ item }}</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  props: {
    msg: String
  },
  setup() {
    const demos = ref(['基础类型', '接口', '可索引的类型', '类类型', '类', '函数', '泛型'])
    return {
      demos
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
