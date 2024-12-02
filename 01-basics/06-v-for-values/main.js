const app = Vue.createApp({
  setup() {
    const framework = {
      id: 1,
      name: 'Vue',
      releaseDate: '2014-02-24',
      color: '#42b883',
    }

    return {
      framework,
    }
  },
})

app.mount('#app')
