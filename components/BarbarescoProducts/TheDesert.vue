<template>
  <div
    class="container "
    id="theDeserts"
  >

    <div class="content">

      <div class="row">
        <div
          class="card"
          v-for="desert in deserts.deserts"
          :key="desert.id"
        >

          <img
            class="card-img-top mx-auto"
            :src="require(`~/assets/img/${desert.image + '.png'}`)"
            :alt="desert.name"
          >
          <div class="card-body">
            <h5
              class="card-title mx-auto text-center crop"
              style="cursor:context-menu"
              v-b-tooltip.hover
              :title="desert.name"
            >{{desert.name}}</h5>
            <p
              class="card-text text-left d-none d-sm-block ingredients"
              style="cursor: context-menu;"
              v-b-tooltip.hover
              :title="desert.summary"
            >{{(desert.summary).slice(0, 30)}}...<span class="card-text quantity">{{desert.quantity}}</span></p>

            <div class="row">
              <div class="col-sm-4 pr-0 my-auto">
                <p class="card-text cost my-auto"><span class="card-text d-inline d-sm-none">{{desert.quantity}}</span> {{desert.price}}</p>

              </div>
              <div class="col-sm-8 text-center  my-auto">
                <button
                  class="btn my-auto mr-auto"
                  @click.prevent="addToCart(desert.id)"
                >Замовити</button></div>
            </div>

          </div>

        </div>

      </div>

    </div>

  </div>
</template>

<script>
import deserts from "~/api/barbaresco.json"
export default {
  name: 'TheDeserts',
  data () {
    return {
      deserts
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
