<script setup>
defineProps({
  src: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <img class="guitar__image" :src="`guitars/${src}.jpg`" alt="src" lazy />
</template>

<style scoped>
.guitar__image {
  height: 250px;
}
</style>
