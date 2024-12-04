<script setup>
import MainButton from './components/MainButton.vue'
import { ref } from 'vue'
const count = ref(0)
</script>

<template>
  <p>{{ count }}</p>
  <MainButton class="button saya" @click="count++" />
</template>

<style scoped></style>
