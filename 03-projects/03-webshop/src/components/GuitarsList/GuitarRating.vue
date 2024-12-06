<script setup>
const props = defineProps({
  rating: {
    type: Number,
    required: false,
    default: 0,
  },
})

// use computed if you need to calculate a value based on props, and it will be updated when props change
const ratingStars = `${'★'.repeat(props.rating)}${'☆'.repeat(
  5 - props.rating
)}(${props.rating})`
</script>

<template>
  <div class="guitar__rating">
    <span v-if="rating > 0">{{ ratingStars }}</span>
    <span v-else>Not rated ({{ rating }})</span>
  </div>
</template>

<style scoped></style>
