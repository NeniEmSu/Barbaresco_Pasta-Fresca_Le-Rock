import gql from 'graphql-tag'
// import myApi from '~/plugins/api/myApi.js'

export const state = () => ({
  animation: 'fade',
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
  // fetchProducts({
  //   commit
  // }) {
  //   myApi.getProducts().then((products) => {
  //     commit('setUpProducts', products)
  //     commit('showToast', 'Продукти завантажені')
  //   })
  // },

  async fetchProducts ({
    commit
  }) {
    const client = this.app.apolloProvider.defaultClient
    await client.query({
      query: gql`{
        barbarescoCollection {
          _id
          nameEn
          nameUk
          nameRu
          price
          image
          imageUri {
            path
          }
        }
      }`
    }).then((products) => {
      commit('setUpProducts', products.data.barbarescoCollection)
      commit('showToast', 'Продукти завантажені')
    })
  },

  async fetchProductsPF ({
    commit
  }) {
    const client = this.app.apolloProvider.defaultClient
    await client.query({
      query: gql`{
        pastaFrescaCollection {
          _id
          nameEn
          nameUk
          nameRu
          price
          image
          imageUri {
            path
          }
        }
      }`
    }).then((products) => {
      commit('setUpProducts', products.data.pastaFrescaCollection)
      commit('showToast', 'Продукти завантажені')
    })
  },

  async fetchProductsLR ({
    commit
  }) {
    const client = this.app.apolloProvider.defaultClient
    await client.query({
      query: gql`{
        leRockCollection {
          _id
          nameEn
          nameUk
          nameRu
          price
          image
          imageUri {
            path
          }
        }
      }`
    }).then((products) => {
      commit('setUpProducts', products.data.leRockCollection)
      commit('showToast', 'Продукти завантажені')
    })
  },

  addToCart ({
    commit
  }, productId) {
    commit('addToCart', productId)
    commit('showToast', 'Додано з кошика')
  },

  addToleRockCart ({
    commit
  }, productId) {
    commit('addToleRockCart', productId)
    commit('showToast', 'Додано з кошика')
  },

  addTopastaFrescaCart ({
    commit
  }, productId) {
    commit('addTopastaFrescaCart', productId)
    commit('showToast', 'Додано з кошика')
  },

  removeFromCart ({
    commit
  }, productId) {
    commit('removeFromCart', productId)
    commit('showToast', 'Видалено з кошика')
  },

  removeFromleRockCart ({
    commit
  }, productId) {
    commit('removeFromleRockCart', productId)
    commit('showToast', 'Видалено з кошика')
  },

  removeFrompastaFrescaCart ({
    commit
  }, productId) {
    commit('removeFrompastaFrescaCart', productId)
    commit('showToast', 'Видалено з кошика')
  },

  deleteFromCart ({
    commit
  }, productId) {
    commit('deleteFromCart', productId)
    commit('showToast', 'Видалено з кошика')
  },

  deleteFromleRockCart ({
    commit
  }, productId) {
    commit('deleteFromleRockCart', productId)
    commit('showToast', 'Видалено з кошика')
  },

  deleteFrompastaFrescaCart ({
    commit
  }, productId) {
    commit('deleteFrompastaFrescaCart', productId)
    commit('showToast', 'Видалено з кошика')
  }
}

export const mutations = {
  setUpProducts (state, productsPayload) {
    state.products = productsPayload
  },

  addToCart (state, productId) {
    const product = state.products.find(product => product._id === productId)

    const cartProduct = state.cart.find(product => product._id === productId)

    if (cartProduct) {
      cartProduct.quantity++
    } else {
      state.cart.push({
        _id: product._id,
        nameEn: product.nameEn,
        nameUk: product.nameUk,
        nameRu: product.nameRu,
        price: product.price,
        image: product.image,
        path: product.imageUri.path,
        quantity: 1
      })
    }

    product.quantity--
  },

  removeFromCart (state, productId) {
    const product = state.products.find(product => product._id === productId)

    const cartProduct = state.cart.find(product => product._id === productId)

    cartProduct.quantity--

    product.quantity++
  },

  deleteFromCart (state, productId) {
    const product = state.products.find(product => product._id === productId)

    const cartProductIndex = state.cart.findIndex(
      product => product._id === productId
    )

    product.quantity = state.cart[cartProductIndex].stock

    state.cart.splice(cartProductIndex, 1)
  },

  addToleRockCart (state, productId) {
    const product = state.products.find(product => product._id === productId)

    const cartProduct = state.leRockCart.find(product => product._id === productId)

    if (cartProduct) {
      cartProduct.quantity++
    } else {
      state.leRockCart.push({
        _id: product._id,
        nameEn: product.nameEn,
        nameUk: product.nameUk,
        nameRu: product.nameRu,
        price: product.price,
        image: product.image,
        path: product.imageUri.path,
        quantity: 1
      })
    }

    product.quantity--
  },

  removeFromleRockCart (state, productId) {
    const product = state.products.find(product => product._id === productId)

    const cartProduct = state.leRockCart.find(product => product._id === productId)

    cartProduct.quantity--

    product.quantity++
  },

  deleteFromleRockCart (state, productId) {
    const product = state.products.find(product => product._id === productId)

    const cartProductIndex = state.leRockCart.findIndex(
      product => product._id === productId
    )

    product.quantity = state.leRockCart[cartProductIndex].stock

    state.leRockCart.splice(cartProductIndex, 1)
  },

  addTopastaFrescaCart (state, productId) {
    const product = state.products.find(product => product._id === productId)

    const cartProduct = state.pastaFrescaCart.find(product => product._id === productId)

    if (cartProduct) {
      cartProduct.quantity++
    } else {
      state.pastaFrescaCart.push({
        _id: product._id,
        nameEn: product.nameEn,
        nameUk: product.nameUk,
        nameRu: product.nameRu,
        price: product.price,
        image: product.image,
        path: product.imageUri.path,
        quantity: 1
      })
    }

    product.quantity--
  },

  removeFrompastaFrescaCart (state, productId) {
    const product = state.products.find(product => product._id === productId)

    const cartProduct = state.pastaFrescaCart.find(product => product._id === productId)

    cartProduct.quantity--

    product.quantity++
  },

  deleteFrompastaFrescaCart (state, productId) {
    const product = state.products.find(product => product._id === productId)

    const cartProductIndex = state.pastaFrescaCart.findIndex(
      product => product._id === productId
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
