<script setup>
defineOptions({
  name: 'mainButton',
})
const buttonAttr = {
  type: 'button',
  disabled: isLoading,
  class: 'text-center',
  id: 1,
}

const renderIsLoading = () => {
  if (isLoading) {
    return 'loading'
  } else {
    return 'submit'
  }
}

const isLoading = true
const url = {
  attr: 'href',
  link: '/him'
}
</script>

<template>
  <a :[url.attr]="url.link">
    <button v-bind="buttonAttr" :id="`id-${buttonAttr.class}`">
      {{ renderIsLoading() }}
    </button>
  </a>
</template>

<style scoped></style>
