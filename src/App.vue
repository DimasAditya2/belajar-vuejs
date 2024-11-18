<script setup>
import { reactive, ref } from 'vue'

const greeting = 'Hello World!'
const blogPost = '<p style="color: red;">Ini Adalah BlogPost</p>'
const idBlog = 1
const blogClass = 'text-4xl flex flex-col justify-center'
const submitButton = {
  title: 'Submit',
  disabled: false,
}

const count = ref(1)

const increment = () => {
  count.value++
}

const user = reactive(['dimas', 'dwi'])
</script>

<template>
  <h1>{{ greeting }}</h1>
  <OptionComponent />
  <CompositionComponent />

  <MainButton :title="`Button`" />
  <MainButton :title="`Submit`" />
  <MainButton v-bind="submitButton" />
  <!-- special casting -->
  <MainButton disabled />

  <!-- Attribute Bindings -->
  <!-- The v-bind directive instructs Vue to keep the element's id attribute in sync with the component's dynamicId property. If the bound value is null or undefined, then the attribute will be removed from the rendered element. -->
  <div :id="idBlog" :class="blogClass">
    {{ blogPost }}
  </div>
  <div v-html="blogPost"></div>
  <HomePage />

  <!-- this is a kebab-case -->
  <button-counter />

  <!-- props -->
  <BlogPost title="My journey with Vue" />

  <button @click="increment">{{ count }}</button>

  <div>
    <h1>name: {{ user[0] }}</h1>
    <button @click="user.push('fifi')">Tambah user {{ user[2] }}</button>
  </div>
</template>

<style scoped></style>
