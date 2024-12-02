const app = Vue.createApp({
  setup() {
    const frameworks = [
      ['Vue', 'React', 'Angular'],
      ['Laravel', 'Symfony', 'Yii', 'CodeIgniter'],
      ['Django', 'Flask', 'FastAPI'],
    ]

    return {
      frameworks,
    }
  },
})

app.mount('#app')
