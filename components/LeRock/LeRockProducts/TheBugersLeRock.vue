<template>
  <div
    id="theBurgers"
    class="container "
  >
    <div class="content">
      <div class="row d-flex justify-content-start ">
        <div
          v-for="product in extractedProductsBurgers"
          :key="product.id"
          class="card"
        >
          <img
            class="card-img-top mx-auto"
            :src="require(`~/assets/img/${product.image + '.jpg'}`)"
            :alt="product.name"
          >
          <div class="card-body">
            <h5
              v-b-tooltip.hover
              class="card-title mx-auto text-center crop"
              style="cursor:context-menu"
              :title="product.name"
            >
              {{ product.name }}
            </h5>
            <p
              v-b-tooltip.hover
              class="card-text text-left d-none d-sm-block"
              style="cursor: context-menu;"
              :title="product.summary"
            >
              {{ (product.summary).slice(0, 39) }}... <span class="card-text quantity">{{ product.volume }}</span>
            </p>

            <div class="row">
              <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                <p class="card-text cost my-auto">
                  <span class="card-text d-inline d-sm-none">{{ product.volume }}</span> {{ product.price | currency }}
                </p>
              </div>
              <div class="col-sm-7 pl-0  my-auto text-center">
                <button
                  class="btn my-auto mr-auto"
                  @click.prevent="addToCart(product.id)"
                >
                  {{ $t('order') }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import productData from '~/plugins/api/products.js'
export default {
  name: 'TheBurgers',
  data () {
    return {

    }
  },

  computed: {
    extractedProductsBurgers () {
      return productData.filter(el => el.category === 'barbbaresco-burgers')
    }
  },

  methods: {
    addToCart (id, append = false) {
      this.$store.dispatch('addToCart', id)
      this.$bvToast.toast(`${this.$store.getters.toast.text}`, {
        title: 'Увага!',
        autoHideDelay: 500,
        toaster: 'b-toaster-bottom-right',
        appendToast: append
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/productCards.scss";

#theBurgers {
  .card p,
  .card h5,
  .card button,
  .card span {
    color: white;
  }

  .card button {
    border: 1px solid #ffffff;
  }

  .card img {
    object-fit: cover;
  }

  .card .card-img-top {
    background-color: $lightColor;
    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.45);
    border-radius: 50%;
    max-width: 150px;
    min-width: 150px;
    height: 150px;
    width: 100%;
    max-height: 150px;

    margin-bottom: 5px;
  }
}
</style>
