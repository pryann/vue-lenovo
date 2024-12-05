<script setup>
import { ref } from 'vue'

const query = ref('')

defineEmits(['on-search-submit'])
</script>

<template>
  <div class="search-bar my-3">
    <form class="form" @submit.prevent="$emit('on-search-submit', query)">
      <div class="form-group d-flex justify-content-center">
        <input
          v-model="query"
          type="text"
          id="search"
          placeholder="Search video"
          class="form-control form-control-lg w-50"
        />
      </div>
    </form>
  </div>
</template>

<style scoped></style>
