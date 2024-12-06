<script setup>
defineProps({
  stock: {
    type: Number,
    required: true,
  },
})

// use an object if you need many more if-else conditions
// const stockStatus = {
//   0: 'Out of stock',
//   1: 'Last change, only 1 left in stock',
//   2: 'Last change, only 2 left in stock',
//   3: 'In stock',
// }
// <span>{{ stockStatus[stock] }}</span>

// const stockStatus = {
//   0: {class: 'text-red', text: 'Out of stock'},
//   1: {class: 'text-orange', text: 'Last change, only 1 left in stock'},
//   2: {class: 'text-orange', text: 'Last change, only 2 left in stock'},
//   3: {class: 'text-green', text: 'In stock'},
// }
</script>

<template>
  <div class="guitar__stock">
    <span v-if="stock === 0" class="text-red">Out of stock</span>
    <span v-else-if="stock < 3" class="text-orange">
      Last change, only {{ stock }} left in stock
    </span>
    <span v-else class="text-green">In stock</span>
  </div>
</template>

<style scoped>
.guitar__stock {
  font-size: 1.1rem;
  font-weight: 500;
  margin: 1rem 0;
}
</style>
