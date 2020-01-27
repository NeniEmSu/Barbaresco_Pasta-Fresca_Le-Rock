import VuexPersistence from 'vuex-persist'

export default ({
  store
}) => {
  window.onNuxtReady(() => {
    new VuexPersistence({
      /* your options */
      reducer: state => ({
        cart: state.cart,
        leRockCart: state.leRockCart,
        pastaFrescaCart: state.pastaFrescaCart
      })
    }).plugin(store)
  })
}