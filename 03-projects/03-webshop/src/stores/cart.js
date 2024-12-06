import { computed, readonly, ref } from 'vue'
import { useToast } from 'vue-toast-notification'

// I do not use UI elements inside the store, I use toast in the component
const toast = useToast()
const cart = ref([])

export function useCartStore() {
  function getCountById(id) {
    return cart.value.find((item) => item.id === id)?.count || 0
  }

  // TODO: separate to 3 different functions: add, update, remove
  // use 3 buttton too inside the component
  function changeCount(guitar, count) {
    try {
      const isItemInCart = cart.value.find((item) => item.id === guitar.id)
      if (isItemInCart) {
        if (count === 0) {
          cart.value = cart.value.filter((item) => item.id !== guitar.id)
          toast.success('Item removed from cart')
        } else {
          isItemInCart.count = count
          toast.success('Item count updated')
        }
      } else {
        cart.value.push({ ...guitar, count })
        toast.success('Item added to cart')
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const totalCount = computed(() =>
    cart.value.reduce((prev, curr) => curr.count + prev, 0)
  )

  const totalPrice = computed(() =>
    cart.value.reduce((prev, curr) => curr.price * curr.count + prev, 0)
  )

  return {
    cart: readonly(cart),
    getCountById,
    changeCount,
    totalCount,
    totalPrice,
  }
}
