const app = Vue.createApp({
  setup() {
    const title = 'Title'
    const logo = {
      src: 'https://vuejs.org/images/logo.png',
      alt: 'VueJS logo',
      width: 100,
    }
    // const src = 'https://vuejs.org/images/logo.png'
    // const alt = 'VueJS logo'
    // const width = 100

    return {
      title,
      logo,
      // src,
      // alt,
      // width,
    }
  },
})

app.mount('#app')
