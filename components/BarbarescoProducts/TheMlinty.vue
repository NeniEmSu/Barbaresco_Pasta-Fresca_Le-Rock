<template>
  <div
    class="container "
    id="theMlinty"
  >

    <div class="content">

      <div class="row">
        <div
          class="card"
          v-for="pancake in pancakes.pancakes"
          :key="pancake.id"
        >

          <img
            class="card-img-top mx-auto"
            :src="require(`~/assets/img/${pancake.image + '.png'}`)"
            :alt="pancake.name"
          >
          <div class="card-body">
            <h5
              class="card-title mx-auto text-center crop"
              style="cursor:context-menu"
              v-b-tooltip.hover
              :title="pancake.name"
            >{{pancake.name}}</h5>
            <p
              class="card-text d-none d-sm-block text-left"
              style="cursor: context-menu;"
              v-b-tooltip.hover
              :title="pancake.summary"
            >{{(pancake.summary).slice(0, 39)}}...<span class="card-text quantity">{{pancake.quantity}}</span></p>

            <div class="row">
              <div class="col-sm-4 pr-0 my-auto">
                <p class="card-text cost my-auto"><span class="card-text d-inline d-sm-none">{{pancake.quantity}}</span> {{pancake.price}}</p>
              </div>
              <div class="col-sm-8 text-center my-auto">
                <button
                  class="btn my-auto mr-auto"
                  @click.prevent="addToCart(pancake.id)"
                >Замовити</button></div>
            </div>

          </div>

        </div>

      </div>

    </div>

  </div>
</template>

<script>
import pancakes from "~/api/barbaresco.json"
export default {
  name: 'TheMlinty',
  data () {
    return {
      pancakes
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
