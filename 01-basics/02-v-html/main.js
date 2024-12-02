const app = Vue.createApp({
  setup() {
    const title = '<span style="color: #42b883">Vue</span>'

    return {
      title,
    }
  },
})

app.mount('#app')
