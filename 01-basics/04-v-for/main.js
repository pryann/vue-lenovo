const app = Vue.createApp({
  setup() {
    // const items = ['item1', 'item2', 'item3']

    const frameworks = [
      { id: 1, name: 'Vue' },
      { id: 2, name: 'React' },
      { id: 3, name: 'Angular' },
    ]

    return {
      frameworks,
    }
  },
})

app.mount('#app')
