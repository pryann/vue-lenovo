<script setup>
import { computed } from 'vue'
import { formatPrice } from '../../utils/formatPrice'

const props = defineProps({
  price: {
    type: Number,
    required: true,
  },
})

// maybe you do not need computed here, but it is a good example
const formattedPrice = computed(() => formatPrice(props.price))
</script>

<template>
  <div class="guitar__price">
    <strong>{{ formattedPrice }}</strong>
  </div>
</template>

<style scoped>
.guitar__price {
  font-size: 1.5rem;
  margin: 0 0 0.5rem 0;
}
</style>
