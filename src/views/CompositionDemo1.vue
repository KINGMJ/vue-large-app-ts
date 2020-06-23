<template>
  <div>
    <!-- <Count1 /> -->
    <Count2 />
  </div>
</template>

<script>
import Count1 from "@/components/Count1.vue";
import Count2 from "@/components/Count2.vue";

export default {
  name: "CompositionDemo1",
  components: {
    Count1,
    Count2
  }
};
</script>
