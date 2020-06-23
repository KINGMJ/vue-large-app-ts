<template>
  <span>鼠标坐标：{{x}}: {{y}}</span>
</template>

<script>
import { useMousePosition } from "../composition/_mouse.ts";
import { ref } from "@vue/composition-api";

export default {
  setup() {
    const { x, y } = useMousePosition();
    //...业务逻辑
    return { x, y };
  }
};
</script>
