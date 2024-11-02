<script>
  export default {
    data() {
      return {
        apiStyle: 'Options component'
      }
    },

    methods: {
      showName() {
        console.log(this.apiStyle)
      }
    }
  }
</script>


<template>
  <h1>{{ apiStyle }}</h1>
  <button @click="showName">show options</button>
</template>
