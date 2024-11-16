<script setup>
const apiStyle = 'Composition Component'
const showName = () => {
  console.log(apiStyle)
}
</script>

<template>
  <h1>{{ apiStyle }}</h1>
  <button @click="showName">show composition</button>
</template>
