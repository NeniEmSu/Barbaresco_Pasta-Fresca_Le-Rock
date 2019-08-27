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
              class="card-text text-left"
              style="cursor: context-menu;"
              v-b-tooltip.hover
              :title="pizza.summary"
            >{{(pizza.summary).slice(0, 42)}}... <span class="card-text quantity">{{pizza.quantity}}</span></p>

            <div class="row">
              <div class="col-4 pr-0 my-auto">
                <p class="card-text cost my-auto">{{pizza.price}}</p>
              </div>
              <div class="col-8  my-auto">
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
.content {
  margin: 20px auto;
}

.card {
  max-width: 200px;
  min-width: 200px;
  width: 100%;
  height: auto;
  padding: 0;
  margin: 20px auto;

  border: 0;

  background-color: transparent;

  .card-img-top {
    background-color: $darkColor;
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

.card-body {
  padding: 0;
}

.card-title {
  font-family: $mainFont;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;

  text-transform: uppercase;

  color: #000000;

  margin-top: 5px;
  margin-bottom: 5px;
}

.card-text {
  font-family: $mainFont;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;

  color: #000000;

  margin-bottom: 10px;

  &.cost {
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
  }
}

.quantity {
  float: right;
  margin-right: 15px;
}

.crop {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.btn {
  font-family: $mainFont;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;

  color: #000000;

  padding: 5px 8px;

  border: 2px solid #000000;
  box-sizing: border-box;
}
</style>
