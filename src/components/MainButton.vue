<script setup>
  defineOptions({
    name: 'mainButton'
  })
  const buttonAttr = {
    disabled: isLoading,
    class: 'text-center',
    id: 1
  }

  const renderIsLoading = () => {
    if (isLoading) {
      return 'loading'
    } else {
      return 'submit'
    }
  }

  const isLoading = true

</script>

<template>
  <button v-bind="buttonAttr" :id="`id-${buttonAttr.class}`">{{ renderIsLoading() }}</button>
</template>

<style scoped></style>
