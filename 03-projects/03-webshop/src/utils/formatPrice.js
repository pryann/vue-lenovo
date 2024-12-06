// export function formatPrice(price) {
//   return price.toLocaleString('en-US', {
//     style: 'currency',
//     currency: 'EUR',
//   })
// }

export const formatPrice = (price) =>
  price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'EUR',
  })
