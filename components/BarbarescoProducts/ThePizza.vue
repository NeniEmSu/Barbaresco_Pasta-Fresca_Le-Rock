<template>
  <div
    class="container "
    id="thePizza"
  >

    <div class="content">

      <div class="row">

        <div
          class="card"
          v-for="product in pizzas"
          :key="product.id"
        >

          <img
            class="card-img-top mx-auto"
            :src="require(`~/assets/img/${product.image + '.png'}`)"
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
            >{{(product.summary).slice(0, 35)}}... <span class="card-text quantity">{{product.volume}}</span></p>

            <div class="row">
              <div class="col-sm-4 pr-0 my-auto">

                <p class="card-text cost my-auto"><span class="card-text d-inline d-sm-none">{{product.volume}}</span> {{product.price}}</p>
              </div>
              <div class="col-sm-8 text-center my-auto">
                <button
                  class="btn my-auto mr-auto"
                  @click.prevent="addToCart(product.id)"
                >Замовити</button></div>
            </div>

          </div>

        </div>

      </div>

    </div>

  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex"

export default {
  name: 'ThePizza',
  data () {
    return {
      loading: false,

    }
  },
  computed: {
    ...mapGetters(["pizzas"]),
    ...mapState(["products"]),


    toast () {
      return this.$store.getters.toast
    },
  },
  methods: {
    addToCart (id) {
      this.$store.dispatch("addToCart", id);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/productCards.scss";
</style>
