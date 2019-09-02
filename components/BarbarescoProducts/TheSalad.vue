<template>
  <div
    class="container "
    id="theSalads"
  >

    <div class="content">

      <div class="row  justify-content-start">
        <div
          class="card"
          v-for="salad in salads.salads"
          :key="salad.id"
        >

          <img
            class="card-img-top mx-auto"
            :src="require(`~/assets/img/${salad.image + '.png'}`)"
            :alt="salad.name"
          >
          <div class="card-body">
            <h5
              class="card-title mx-auto text-center crop"
              style="cursor:context-menu"
              v-b-tooltip.hover
              :title="salad.name"
            >{{salad.name}}</h5>
            <p
              class="card-text d-none d-sm-block text-left"
              style="cursor: context-menu;"
              v-b-tooltip.hover
              :title="salad.summary"
            >{{(salad.summary).slice(0, 39)}}...<span class="card-text quantity">{{salad.quantity}}</span></p>

            <div class="row">
              <div class="col-sm-4 pr-0 my-auto">
                <p class="card-text cost my-auto"><span class="card-text d-inline d-sm-none">{{salad.quantity}}</span> {{salad.price}}</p>
              </div>
              <div class="col-sm-8 text-center my-auto">
                <a
                  href="#"
                  class="btn my-auto mr-auto"
                >Замовити</a></div>
            </div>

          </div>

        </div>

      </div>

    </div>

  </div>
</template>

<script>
import salads from "~/api/barbaresco.json"
export default {
  name: 'TheSalads',
  data () {
    return {
      salads
    }
  },
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/productCards.scss";
</style>

