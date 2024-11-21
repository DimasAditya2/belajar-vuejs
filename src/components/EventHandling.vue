<script>
  export default {
    data() {
      return {
        count: 0,
        name: 'Vue.js'
      }
    },
    methods: {
      handleClick() {
        alert('Tombol diklik')
      },
      sayHello(name) {
        alert(`Halo, ${name}`)
      },
      greet(event) {
        alert(`Hello ${this.name}`)

        if (event) {
          alert(event.target.tagName)
        }
      }
    }
  }
</script>

<template>
  <div>
    <button v-on:click="handleClick">Klik saya!</button>
    <!-- or -->
     <button @click="handleClick">Klik saya!</button>

     <button @click="() => console.log('hello world')">console.log()</button>

     <button @click="sayHello('dimas')">Sapa saya</button>

     <button @click="count++">Add 1</button>
     <p>Count is: {{ count }}</p>

     <hr>

     <button @click="greet">Greet</button>
  </div>
</template>
