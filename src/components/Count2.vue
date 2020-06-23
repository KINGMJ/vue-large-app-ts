<template>
  <button @click="increment">Count is: {{ count }}, double is: {{ double }}</button>
</template>

<script>
import { ref, computed, watch, onMounted } from "@vue/composition-api";

export default {
  setup() {
    //reactive state
    const count = ref(0);
    //computed state
    const double = computed(() => count.value * 2);
    //method
    const increment = () => {
      count.value++;
    };
    //watch
    watch(
      () => count.value,
      val => {
        console.log(`count is ${val}`);
      }
    );

    onMounted(() => {
      console.log("mounted");
    });

    return {
      count,
      double,
      increment
    };
  }
};
</script>
