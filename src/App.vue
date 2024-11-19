<script setup>
import { computed, reactive, ref } from 'vue';

  // const showAuthor = ref(true)

  const author = reactive({
    name: 'John Doe',
    books: [
      'vue 1 - Advanced Guide',
      'vue 2 - Basic Guide',
      'vue 3 - The Mystery'
    ]
  })

  const count = ref(0)

  const isPublished = computed(() => {
    console.log('test')
    return author.books.length > 0 ? 'Published yes' : 'Published no'
  })

  const increment = () => {
    count.value++
  }
</script>

<template>
  <p>Has Published books:</p>
  <span>{{ isPublished }}</span>
  <button @click="increment">{{ count }}</button>

  <h1>{{ author.name }}
    <span v-if="author.books.length > 1">Have more than one book</span>
    <span v-else-if="author.books.length === 1">Have a book</span>
    <span v-else>Don't Have Book</span>
  </h1>
</template>

<style scoped></style>
