<script>
  export default {
    data() {
      return {
        count: 0
      }
    }
  }
</script>


<template>
  <div>
    <button @click="count++">You clicked me {{ count }} times.</button>
  </div>
</template>
