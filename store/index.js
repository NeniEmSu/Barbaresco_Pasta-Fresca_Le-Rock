import myApi from '~/plugins/api/myApi.js'

export const state = () => ({
  animation: 'fade-in-up',
  cart: [],
  leRockCart: [],
  pastaFrescaCart: [],
  toast: {
    text: '',
    show: false
  },
  products: ''
})

export const getters = {
  // pizzas: state => state.arrayedStoreData.filter(el => el.category === "pizzas"),

  cartSize (state) {
    return state.cart.length
  },

  leRockCartSize (state) {
    return state.leRockCart.length
  },

  pastaFrescaCartSize (state) {
    return state.pastaFrescaCart.length
  },

  cartTotalAmount (state) {
    return state.cart.reduce((total, product) => {
      return total + product.price * product.quantity
    }, 0)
  },

  leRockCartTotalAmount (state) {
    return state.leRockCart.reduce((total, product) => {
      return total + product.price * product.quantity
    }, 0)
  },
  pastaFrescaCartTotalAmount (state) {
    return state.pastaFrescaCart.reduce((total, product) => {
      return total + product.price * product.quantity
    }, 0)
  },

  toast (state) {
    return state.toast
  }
}

export const actions = {
  fetchProducts ({
    commit
  }) {
    myApi.getProducts().then((products) => {
      commit('setUpProducts', products)
      commit('showToast', 'Продукти завантажені')
    })
  },

  addToCart ({
    commit
  }, productId) {
    myApi.products('add', productId).then((productId) => {
      commit('addToCart', productId)
      commit('showToast', 'Додано з кошика')
    })
  },

  addToleRockCart ({
    commit
  }, productId) {
    myApi.products('add', productId).then((productId) => {
      commit('addToleRockCart', productId)
      commit('showToast', 'Додано з кошика')
    })
  },

  addTopastaFrescaCart ({
    commit
  }, productId) {
    myApi.products('add', productId).then((productId) => {
      commit('addTopastaFrescaCart', productId)
      commit('showToast', 'Додано з кошика')
    })
  },

  removeFromCart ({
    commit
  }, productId) {
    myApi.products('remove', productId).then((productId) => {
      commit('removeFromCart', productId)
      commit('showToast', 'Видалено з кошика')
    })
  },

  removeFromleRockCart ({
    commit
  }, productId) {
    myApi.products('remove', productId).then((productId) => {
      commit('removeFromleRockCart', productId)
      commit('showToast', 'Видалено з кошика')
    })
  },

  removeFrompastaFrescaCart ({
    commit
  }, productId) {
    myApi.products('remove', productId).then((productId) => {
      commit('removeFrompastaFrescaCart', productId)
      commit('showToast', 'Видалено з кошика')
    })
  },

  deleteFromCart ({
    commit
  }, productId) {
    myApi.products('delete', productId).then((productId) => {
      commit('deleteFromCart', productId)
      commit('showToast', 'Видалено з кошика')
    })
  },

  deleteFromleRockCart ({
    commit
  }, productId) {
    myApi.products('delete', productId).then((productId) => {
      commit('deleteFromleRockCart', productId)
      commit('showToast', 'Видалено з кошика')
    })
  },

  deleteFrompastaFrescaCart ({
    commit
  }, productId) {
    myApi.products('delete', productId).then((productId) => {
      commit('deleteFrompastaFrescaCart', productId)
      commit('showToast', 'Видалено з кошика')
    })
  }
  // checkout: ({
  //   state,
  //   commit
  // }) => {
  //   myApi.buyProducts(
  //     state.cart,
  //     () => {
  //       commit('emptyCart')
  //       commit('setCheckoutStatus', 'Successful')
  //     },
  //     () => {
  //       commit('setCheckoutStatus', 'Failled')
  //     }
  //   )
  // }
}

export const mutations = {
  pizzasAction: state => state.products.filter(el => el.category === 'pizzas'),

  setUpProducts (state, productsPayload) {
    state.products = productsPayload
  },

  addToCart (state, productId) {
    const product = state.products.find(product => product.id === productId)

    const cartProduct = state.cart.find(product => product.id === productId)

    if (cartProduct) {
      cartProduct.quantity++
    } else {
      state.cart.push({
        // ...product,
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,

        // stock: product.quantity,
        quantity: 1
      })
    }

    product.quantity--
  },

  removeFromCart (state, productId) {
    const product = state.products.find(product => product.id === productId)

    const cartProduct = state.cart.find(product => product.id === productId)

    cartProduct.quantity--

    product.quantity++
  },

  deleteFromCart (state, productId) {
    const product = state.products.find(product => product.id === productId)

    const cartProductIndex = state.cart.findIndex(
      product => product.id === productId
    )

    product.quantity = state.cart[cartProductIndex].stock

    state.cart.splice(cartProductIndex, 1)
  },

  addToleRockCart (state, productId) {
    const product = state.products.find(product => product.id === productId)

    const cartProduct = state.leRockCart.find(product => product.id === productId)

    if (cartProduct) {
      cartProduct.quantity++
    } else {
      state.leRockCart.push({
        // ...product,
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,

        // stock: product.quantity,
        quantity: 1
      })
    }

    product.quantity--
  },

  removeFromleRockCart (state, productId) {
    const product = state.products.find(product => product.id === productId)

    const cartProduct = state.leRockCart.find(product => product.id === productId)

    cartProduct.quantity--

    product.quantity++
  },

  deleteFromleRockCart (state, productId) {
    const product = state.products.find(product => product.id === productId)

    const cartProductIndex = state.leRockCart.findIndex(
      product => product.id === productId
    )

    product.quantity = state.leRockCart[cartProductIndex].stock

    state.leRockCart.splice(cartProductIndex, 1)
  },

  addTopastaFrescaCart (state, productId) {
    const product = state.products.find(product => product.id === productId)

    const cartProduct = state.pastaFrescaCart.find(product => product.id === productId)

    if (cartProduct) {
      cartProduct.quantity++
    } else {
      state.pastaFrescaCart.push({
        // ...product,
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,

        // stock: product.quantity,
        quantity: 1
      })
    }

    product.quantity--
  },

  removeFrompastaFrescaCart (state, productId) {
    const product = state.products.find(product => product.id === productId)

    const cartProduct = state.pastaFrescaCart.find(product => product.id === productId)

    cartProduct.quantity--

    product.quantity++
  },

  deleteFrompastaFrescaCart (state, productId) {
    const product = state.products.find(product => product.id === productId)

    const cartProductIndex = state.pastaFrescaCart.findIndex(
      product => product.id === productId
    )

    product.quantity = state.pastaFrescaCart[cartProductIndex].stock

    state.pastaFrescaCart.splice(cartProductIndex, 1)
  },

  showToast (state, toastText) {
    state.toast.show = true
    state.toast.text = toastText
  },

  hideToast (state) {
    state.toast.show = false
    state.toast.text = ''
  },

  // setCheckoutStatus (state, status) {
  //   state.checkoutStatus = status
  // },

  emptyCart (state) {
    state.cart = []
    state.cartCount = 0
  },

  emptyleRockCart (state) {
    state.leRockCart = []
    state.leRockCartCount = 0
  },

  emptypastaFrescaCart (state) {
    state.pastaFrescaCart = []
    state.pastaFrescaCartCount = 0
  },

  SET_ANIMATION (state, animation) {
    state.animation = animation
  }
}
