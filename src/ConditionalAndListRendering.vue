<script setup>
import { computed, reactive, ref } from 'vue'

// const showAuthor = ref(true)

const author = reactive({
  name: 'John Doe',
  books: [
    {
      title: 'Naruto',
      relaseDate: 1999,
      reviews: [5, 5, 5, 4],
      avgReview: 5,
    },
    {
      title: 'Naruto Shippuden ',
      relaseDate: 2007,
      reviews: [5, 5, 5, 4],
      avgReview: 2,
    },
  ],
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

  <h1>
    {{ author.name }}
    <span v-if="author.books.length > 1">Have more than one book</span>
    <span v-else-if="author.books.length === 1">Have a book</span>
    <span v-else>Don't Have Book</span>
  </h1>

  <h2>Books:</h2>
  <ul>
    <li
      v-for="({ title, relaseDate, reviews }, index) in author.books"
      :key="index"
    >
      {{ title }} - {{ relaseDate }}

      <span v-for="(review, index) in reviews" :key="index">{{ review }}</span>
    </li>
  </ul>

  <hr />

  <ul>
    <li v-for="(data, key, index) in author" :key="key">
      {{ index }}. {{ key }} : {{ data }}
    </li>
  </ul>

  <ol>
    <li v-for="(item, index) in 10" :key="index">dimas</li>
  </ol>

  <ul>
    <template v-for="(item, index) in author.books" :key="index">
      <MainButton v-if="item.avgReview > 3" :title="item.title"/>
    </template>
  </ul>
</template>

<style scoped></style>
