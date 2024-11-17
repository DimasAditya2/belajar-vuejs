<script setup>
const { title, disabled = false } = defineProps({
  title: {
    type: String,
    default: 'title'
  },
  disabled: Boolean
})
console.log(title)
</script>

<template>
  <button :disabled>{{ title }}</button>
</template>

<style scoped></style>
