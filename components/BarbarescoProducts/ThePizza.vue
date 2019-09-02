<template>
  <div
    class="container "
    id="thePizza"
  >

    <div class="content">

      <div class="row">
        <div
          class="card"
          v-for="pizza in pizzas.pizzas"
          :key="pizza.id"
        >

          <img
            class="card-img-top mx-auto"
            :src="require(`~/assets/img/${pizza.image + '.png'}`)"
            :alt="pizza.name"
          >
          <div class="card-body">
            <h5
              class="card-title mx-auto text-center crop"
              style="cursor:context-menu"
              v-b-tooltip.hover
              :title="pizza.name"
            >{{pizza.name}}</h5>
            <p
              class="card-text text-left d-none d-sm-block"
              style="cursor: context-menu;"
              v-b-tooltip.hover
              :title="pizza.summary"
            >{{(pizza.summary).slice(0, 35)}}... <span class="card-text quantity">{{pizza.quantity}}</span></p>

            <div class="row">
              <div class="col-sm-4 pr-0 my-auto">

                <p class="card-text cost my-auto"><span class="card-text d-inline d-sm-none">{{pizza.quantity}}</span> {{pizza.price}}</p>
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
import pizzas from "~/api/barbaresco.json"
export default {
  name: 'ThePizza',
  data () {
    return {
      pizzas
    }
  },
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/productCards.scss";
</style>
