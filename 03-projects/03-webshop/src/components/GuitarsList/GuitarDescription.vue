<script setup>
defineProps({
  description: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <p>{{ description }}</p>
</template>

<style scoped></style>
