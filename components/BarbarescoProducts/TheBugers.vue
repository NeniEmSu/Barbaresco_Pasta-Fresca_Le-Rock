<template>
  <div
    class="container "
    id="theBurgers"
  >

    <div class="content">

      <div class="row d-flex justify-content-around">
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
              class="card-text text-left"
              style="cursor: context-menu;"
              v-b-tooltip.hover
              :title="burger.summary"
            >{{(burger.summary).slice(0, 39)}}... <span class="card-text quantity">{{burger.quantity}}</span></p>

            <div class="row">
              <div class="col-4 pr-0 my-auto">
                <p class="card-text cost my-auto">{{burger.price}}</p>
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
.crop {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.content {
  margin: 20px 0;
}

.card {
  width: calc(100% / 6);
  height: auto;
  padding: 0;
  margin: 20px 10px;

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

@media screen and (max-width: 1200px) {
  .card {
    width: calc(100% / 5);
    margin: 20px auto;
  }
}

@media screen and (max-width: 994px) {
  .card {
    width: calc(100% / 4);
    margin: 20px auto;
  }
}

@media screen and (max-width: 550px) {
  .card {
    width: calc(100% / 3);
    margin: 20px auto;
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
