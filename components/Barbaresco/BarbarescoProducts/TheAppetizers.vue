<template>
  <div
    class="container "
    id="theAppetizers"
  >

    <div class="content">

      <div class="row d-flex justify-content-start ">
        <div
          class="card"
          v-for="product in extractedProductsAppetizers"
          :key="product.id"
        >

          <img
            class="card-img-top mx-auto"
            :src="require(`~/assets/img/${product.image + '.jpg'}`)"
            :alt="product.name"
          >
          <div class="card-body">
            <h5
              class="card-title mx-auto text-center crop"
              style="cursor:context-menu"
              v-b-tooltip.hover
              :title="product.name"
            >{{product.name}}</h5>
            <p
              class="card-text text-left d-none d-sm-block"
              style="cursor: context-menu;"
              v-b-tooltip.hover
              :title="product.summary"
            >{{(product.summary).slice(0, 39)}}... <span class="card-text quantity">{{product.volume}}</span></p>

            <div class="row">
              <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                <p class="card-text cost my-auto"><span class="card-text d-inline d-sm-none">{{product.volume}}</span> {{product.price | currency }}</p>
              </div>
              <div class="col-sm-7 pl-0  my-auto text-center">
                <button
                  class="btn my-auto mr-auto"
                  @click.prevent="addToCart(product.id)"
                >{{$t('order')}}</button></div>
            </div>

          </div>

        </div>

      </div>

    </div>

  </div>
</template>

<script>
import productData from "~/plugins/api/products.js"
export default {
  name: 'TheAppetizers',
  data () {
    return {

    }
  },

  computed: {
    extractedProductsAppetizers () {
      return productData.filter(el => el.category === "barbbaresco-appetizers")
    }
  },

  methods: {
    addToCart (id, append = false) {
      this.$store.dispatch("addToCart", id);
      this.$bvToast.toast(`${this.$store.getters.toast.text}`, {
        title: 'Увага!',
        autoHideDelay: 500,
        toaster: "b-toaster-bottom-right",
        appendToast: append
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/productCards.scss";
</style>
