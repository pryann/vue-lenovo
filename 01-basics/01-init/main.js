const app = Vue.createApp({
  setup() {
    const message = 'Hello, Vue 3!'
    return { message }
  },
})

app.mount('#app')
