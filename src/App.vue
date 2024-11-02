<script setup>
  import MainButton from "./components/MainButton.vue";
  import OptionComponents from './components/OptionsComponent.vue'
  import CompositionComponent from './components/CompositionComponent.vue'
  const greeting = 'Hello World!'
</script>

<template>
  <h1>{{ greeting }}</h1>
  <OptionComponents/>
  <CompositionComponent/>
  <MainButton/>

</template>

<style scoped></style>
