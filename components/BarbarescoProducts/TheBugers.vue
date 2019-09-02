<template>
  <div
    class="container "
    id="theBurgers"
  >

    <div class="content">

      <div class="row d-flex justify-content-start ">
        <div
          class="card"
          v-for="burger in burgers.burgers"
          :key="burger.id"
        >

          <img
            class="card-img-top mx-auto"
            :src="require(`~/assets/img/${burger.image + '.png'}`)"
            :alt="burger.name"
          >
          <div class="card-body">
            <h5
              class="card-title mx-auto text-center crop"
              style="cursor:context-menu"
              v-b-tooltip.hover
              :title="burger.name"
            >{{burger.name}}</h5>
            <p
              class="card-text text-left d-none d-sm-block"
              style="cursor: context-menu;"
              v-b-tooltip.hover
              :title="burger.summary"
            >{{(burger.summary).slice(0, 39)}}... <span class="card-text quantity">{{burger.quantity}}</span></p>

            <div class="row">
              <div class="col-sm-4 pr-0 my-auto">
                <p class="card-text cost my-auto"><span class="card-text d-inline d-sm-none">{{burger.quantity}}</span> {{burger.price}}</p>
              </div>
              <div class="col-sm-8  my-auto text-center">
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
import burgers from "~/api/barbaresco.json"
export default {
  name: 'TheBugers',
  data () {
    return {
      burgers
    }
  },
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/productCards.scss";
</style>
