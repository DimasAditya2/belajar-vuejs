<script setup>
defineOptions({
  inheritAttrs: true,
})

import { useAttrs } from 'vue';

const attrs = useAttrs()
console.log(attrs.class);


const { title, disabled } = defineProps({
  title: {
    type: String,
    default: 'title',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const fontColor = '#000'
const availableColor = '#fff'
</script>

<template>
  <label>ini button</label>
  <button
    v-bind="$attrs"
    :disabled
    class="button"
    :class="{ disabled: disabled }"
    :style="{ color: disabled ? fontColor : availableColor }"
  >
    {{ title }}
  </button>
</template>

<style scoped>
.button {
  background-color: salmon;
  border: none;
  color: white;
  padding: 5px 9px;
  width: 100px;
  border-radius: 50px;
}

.disabled {
  background-color: gray;
}
</style>
