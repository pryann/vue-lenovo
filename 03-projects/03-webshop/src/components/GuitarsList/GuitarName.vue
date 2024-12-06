<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
})
</script>
<template>
  <h2>{{ name }}</h2>
</template>

<style scoped></style>
