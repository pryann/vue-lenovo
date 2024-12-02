const { createApp, ref, computed, watch } = Vue

const app = createApp({
  setup() {
    const price = ref(0)
    const money = ref(5)
    const errorMessage = ref(null)

    function decrement() {
      price.value--
    }

    function increment() {
      price.value++
    }

    const formattedPrice = computed(() => price.value.toLocaleString('en-US', { style: 'currency', currency: 'EUR' }))

    watch(price, () => {
      errorMessage.value = price.value > money.value ? 'You cannot afford this item' : null
    })

    // function formatPrice() {
    //   return price.value.toLocaleString('en-US', { style: 'currency', currency: 'EUR' })
    // }

    return {
      price,
      increment,
      decrement,
      // formatPrice,
      formattedPrice,
      errorMessage,
    }
  },
})

app.mount('#app')
