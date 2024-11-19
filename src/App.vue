<script setup>
import { computed, reactive, ref } from 'vue';

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
</template>

<style scoped></style>
