const app = Vue.createApp({
  setup() {
    const guitars = [
      {
        id: 1,
        name: 'Ibanez S6570SK-STB Prestige',
        stock: 0,
      },
      {
        id: 2,
        name: 'Fender AM Ultra Luxe Strat MN PRB',
        stock: 2,
      },
      {
        id: 3,
        name: 'FGN Expert Odyssey SBB',
        stock: 11,
      },
      {
        id: 4,
        name: 'Gibson SG Standard Reissue Cherry VOS',
        stock: 1,
      },
      {
        id: 5,
        name: 'Jackson SL2A MAH Pro Soloist UWH',
        stock: 25,
      },
    ]

    // const outOfStockColor = 'red'
    // const onlyFewLeftColor = 'orange'
    // const inStockColor = 'green'

    const outOfStockStyle = {
      color: 'red',
      fontSize: '1.25em',
    }

    const onlyFewLeftStyle = {
      color: 'orange',
      fontSize: '1.5em',
    }

    const inStockStyle = {
      color: 'green',
      fontSize: '1em',
    }

    return {
      guitars,
      outOfStockStyle,
      onlyFewLeftStyle,
      inStockStyle,
      // outOfStockColor,
      // onlyFewLeftColor,
      // inStockColor,
    }
  },
})

app.mount('#app')
