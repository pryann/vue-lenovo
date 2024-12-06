<script setup>
import { ref, watch } from 'vue'
import { useCartStore } from '../../stores/cart'

const props = defineProps({
  guitar: {
    type: Object,
    required: true,
  },
})

const { cart, getCountById, changeCount } = useCartStore()
const count = ref(getCountById(props.guitar.id))

// exampel component with function expressions
const increaseCount = () => {
  count.value++
}

const decreaseCount = () => {
  count.value--
}

const modifyCartItem = () => {
  changeCount(props.guitar, count.value)
  console.log(cart.value)
}

watch(count, () => {
  const minCount = 0
  const maxCount = props.guitar.stock
  if (count.value > maxCount) count.value = maxCount
  else if (count.value < minCount) count.value = minCount
})
</script>

<template>
  <div class="cart">
    <button @click="decreaseCount">-</button>
    <input type="text" v-model="count" />
    <button @click="increaseCount">+</button>
    <button class="update-cart" @click="modifyCartItem">Update cart</button>
  </div>
</template>

<style scoped>
button {
  padding: 0.25rem 1rem;
  background-color: var(--black);
  border: 1px solid var(--black);
  color: var(--white);
}

button:active {
  background: var(--white);
  color: var(--black);
}

button:hover {
  cursor: pointer;
}

input {
  border: 1px solid var(--black);
  padding: 0.25rem;
  border-radius: 0;
  text-align: center;
  width: 6ch;
}

input:focus {
  outline: 1px solid var(--green);
}

.update-cart {
  margin: 0 0 0 1rem;
}
</style>
