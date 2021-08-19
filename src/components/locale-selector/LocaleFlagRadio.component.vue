<template>
  <label role="radio" :class="`locale-radio ${localeInfo.selected ? 'selected' : ''}`.trim()">
    <i :class="`flag-icons ${localeInfo.flag}`"></i>
    <input type="radio" class="icon-button" name="locale" :value="localeInfo.selected" @click="onClick" />
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    localeInfo: {
      type: Object
    }
  },
  setup(props, { emit }) {
    const onClick = () => {
      emit('clicked', props.localeInfo)
    }

    return {
      onClick
    }
  }
})
</script>
