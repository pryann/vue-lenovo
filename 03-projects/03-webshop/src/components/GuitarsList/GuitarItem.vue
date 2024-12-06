<script setup>
import AddToCart from './AddToCart.vue'
import GuitarDescription from './GuitarDescription.vue'
import GuitarImage from './GuitarImage.vue'
import GuitarName from './GuitarName.vue'
import GuitarPrice from './GuitarPrice.vue'
import GuitarRating from './GuitarRating.vue'
import GuitarStock from './GuitarStock.vue'

defineProps({
  guitar: {
    type: Object,
    required: true,
  },
})
</script>
<template>
  <div class="guitar">
    <div class="left-column">
      <GuitarImage />
    </div>
    <div class="right-column">
      <GuitarName />
      <GuitarDescription />
      <GuitarPrice />
      <GuitarRating />
      <GuitarStock />
      <AddToCart />
    </div>
  </div>
</template>

<style scoped>
.guitar {
  box-shadow: 0.25rem 0.1rem 0.5rem rgba(0, 0, 0, 0.1);
  display: flex;
  padding: 1rem;
  margin: 0 0 2rem 0;
}

.right-column {
  padding: 0 0 0 3rem;
}
</style>
