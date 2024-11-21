<script setup>
import { ref } from 'vue';
import MainButton from './components/MainButton.vue';
const disabled = ref(false)

const isDisabled = () => {
  disabled.value = !disabled.value
}


</script>

<template>
  <MainButton @click="isDisabled" :disabled="disabled" class="halo"/>
</template>

<style scoped></style>
