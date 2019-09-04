import data from "~/api/barbaresco.json";

export const state = () => ({
  animation: 'fade-in-up',
  storeData: data,
  cart: []
});

export const getters = {
  cartSize(state) {
    return state.cart.length;
  },

  cartTotalAmount(state) {
    return state.cart.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  },

  toast(state) {
    return state.toast;
  }
};

export const actions = {};

export const mutations = {
  setUpProducts(state, productsPayload) {
    state.products = productsPayload;
  },

  addToCart(state, productId) {
    let product = state.products.find(product => product.id === productId);

    let cartProduct = state.cart.find(product => product.id === productId);

    if (cartProduct) {
      cartProduct.quantity++;
    } else {
      state.cart.push({
        ...product,
        stock: product.quantity,
        quantity: 1
      });
    }

    product.quantity--;
  },

  removeFromCart(state, productId) {
    let product = state.products.find(product => product.id === productId);

    let cartProduct = state.cart.find(product => product.id === productId);

    cartProduct.quantity--;

    product.quantity++;
  },

  deleteFromCart(state, productId) {
    let product = state.products.find(product => product.id === productId);

    let cartProductIndex = state.cart.findIndex(
      product => product.id === productId
    );

    product.quantity = state.cart[cartProductIndex].stock;

    state.cart.splice(cartProductIndex, 1);
  },

  showToast(state, toastText) {
    state.toast.show = true;
    state.toast.text = toastText;
  },

  hideToast(state) {
    state.toast.show = false;
    state.toast.text = "";
  },

  setCheckoutStatus(state, status) {
    state.checkoutStatus = status;
  },

  emptyCart(state) {
    state.cart = [];
    state.cartCount = 0;
  },

  SET_ANIMATION(state, animation) {
    state.animation = animation;
  }
};
