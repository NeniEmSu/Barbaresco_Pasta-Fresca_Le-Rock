<template>
  <div
    class="container "
    id="drinks"
  >

    <div class="content">

      <div class="row">

        <div class="col-sm-3">
          <div class="card card-cat mx-auto">
            <div class="m-auto text-center">
              <img
                src="~/assets/img/barbarescoDrinksCoffeIcon.png"
                alt="icon"
                class="d-inline-block d-sm-none m-auto text-center"
                align="left"
                style="height:25px;"
              >
              <h2 class="text-center m-auto d-inline-block"> Кава</h2>
              <b-img-lazy
                src="~/assets/img/barbarescoDrinksCoffeIcon.png"
                alt="icon"
                class="m-auto d-none d-sm-block"
              ></b-img-lazy>
            </div>
          </div>
        </div>

        <div class="col-sm-9">
          <div class="row">
            <div
              class="card"
              v-for="coffee in extractedProductsCoffee"
              :key="coffee.id"
            >

              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${coffee.image + '.png'}`)"
                :alt="coffee.name"
              >
              <div class="card-body">
                <h5
                  class="card-title mx-auto text-center crop"
                  style="cursor:context-menu"
                  v-b-tooltip.hover
                  :title="coffee.name"
                >{{coffee.name}}</h5>
                <p
                  class="card-text text-left ingredients d-none d-sm-block"
                  style="cursor: context-menu;"
                  v-b-tooltip.hover
                  :title="coffee.summary"
                >{{(coffee.summary).slice(0, 30)}}...<span class="card-text quantity">{{coffee.volume}}</span></p>

                <div class="row">
                  <div class="col-sm-5 pr-0 my-auto">
                    <p class="card-text cost my-auto"><span class="card-text d-inline d-sm-none">{{coffee.volume}}</span> {{coffee.price | currency}}</p>

                  </div>
                  <div class="col-sm-7 pl-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto"
                      @click.prevent="addToCart(coffee.id)"
                    >Замовити</button></div>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>

      <hr>

      <div class="row">

        <div class="col-sm-3">

          <div class="card card-cat mx-auto">
            <div class="m-auto text-center">
              <img
                src="~/assets/img/barbarescoDrinksTeaLeafIcon.png"
                alt="icon"
                class="d-inline-block d-sm-none m-auto text-center"
                align="left"
                style="height:25px;"
              >
              <h2 class="text-center m-auto d-inline-block">Чай</h2>
              <b-img-lazy
                src="~/assets/img/barbarescoDrinksTeaLeafIcon.png"
                alt="icon"
                class="m-auto d-none d-sm-block"
              ></b-img-lazy>
            </div>
          </div>

          <!-- <div class="card card-cat">
            <div class="m-auto text-center">
              <h2 class="text-center">Чай</h2>
              <b-img-lazy
                src="~/assets/img/barbarescoDrinksTeaLeafIcon.png"
                class="m-auto"
              ></b-img-lazy>
            </div>
          </div> -->
        </div>
        <div class="col-sm-9">
          <div class="row">
            <div
              class="card"
              v-for="tea in extractedProductsTea"
              :key="tea.id"
            >

              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${tea.image + '.png'}`)"
                :alt="tea.name"
              >
              <div class="card-body">
                <h5
                  class="card-title mx-auto text-center crop"
                  style="cursor:context-menu"
                  v-b-tooltip.hover
                  :title="tea.name"
                >{{tea.name}}</h5>
                <p
                  class="card-text text-left ingredients d-none d-md-block"
                  style="cursor: context-menu;"
                  v-b-tooltip.hover
                  :title="tea.summary"
                >{{(tea.summary).slice(0, 30)}}...<span class="card-text quantity">{{tea.volume}}</span></p>

                <div class="row">
                  <div class="col-sm-5 pr-0 my-auto">
                    <p class="card-text cost my-auto"><span class="card-text d-inline d-sm-none">{{tea.volume}}</span> {{tea.price | currency}}</p>
                  </div>
                  <div class="col-sm-7 pl-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto"
                      @click.prevent="addToCart(tea.id)"
                    >Замовити</button></div>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>

      <hr>

      <div class="row">

        <div class="col-sm-3">
          <div class="card card-cat mx-auto">
            <div class="m-auto text-center">
              <img
                src="~/assets/img/barbarescoDrinksFreshIcon.png"
                alt="icon"
                class="d-inline-block d-sm-none m-auto text-center"
                align="left"
                style="height:25px;"
              >
              <h2 class="text-center m-auto d-inline-block">Холодні напої</h2>
              <b-img-lazy
                src="~/assets/img/barbarescoDrinksFreshIcon.png"
                alt="icon"
                class="m-auto d-none d-sm-block"
              ></b-img-lazy>
            </div>
          </div>

        </div>

        <div class="col-sm-9">
          <div class="row">
            <div
              class="card"
              v-for="fresh in extractedProductsFresh"
              :key="fresh.id"
            >

              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${fresh.image + '.png'}`)"
                :alt="fresh.name"
              >
              <div class="card-body">
                <h5
                  class="card-title mx-auto text-center crop"
                  style="cursor:context-menu"
                  v-b-tooltip.hover
                  :title="fresh.name"
                >{{fresh.name}}</h5>
                <p
                  class="card-text text-left ingredients d-none d-md-block"
                  style="cursor: context-menu;"
                  v-b-tooltip.hover
                  :title="fresh.summary"
                >{{(fresh.summary).slice(0, 30)}}...<span class="card-text quantity">{{fresh.volume}}</span></p>

                <div class="row">
                  <div class="col-sm-5 pr-0 my-auto">
                    <p class="card-text cost my-auto"><span class="card-text d-inline d-sm-none">{{fresh.volume}}</span> {{fresh.price | currency}}</p>
                  </div>
                  <div class="col-sm-7 pl-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto"
                      @click.prevent="addToCart(fresh.id)"
                    >Замовити</button></div>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>

      <hr>

      <div class="row">

        <div class="col-sm-3">

          <div class="card card-cat mx-auto">
            <div class="m-auto text-center">
              <img
                src="~/assets/img/barbarescoDrinksFreshIcon.png"
                alt="icon"
                class="d-inline-block d-sm-none m-auto text-center"
                align="left"
                style="height:25px;"
              >
              <h2 class="text-center m-auto d-inline-block">ЛИМОНАДИ</h2>
              <b-img-lazy
                src="~/assets/img/barbarescoDrinksFreshIcon.png"
                alt="icon"
                class="m-auto d-none d-sm-block"
              ></b-img-lazy>
            </div>
          </div>

        </div>

        <div class="col-sm-9">
          <div class="row">
            <div
              class="card"
              v-for="lemonade in extractedProductsLemonade"
              :key="lemonade.id"
            >

              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${lemonade.image + '.png'}`)"
                :alt="lemonade.name"
              >
              <div class="card-body">
                <h5
                  class="card-title mx-auto text-center crop"
                  style="cursor:context-menu"
                  v-b-tooltip.hover
                  :title="lemonade.name"
                >{{lemonade.name}}</h5>
                <p
                  class="card-text text-left ingredients d-none d-md-block"
                  style="cursor: context-menu;"
                  v-b-tooltip.hover
                  :title="lemonade.summary"
                >{{(lemonade.summary).slice(0, 30)}}...<span class="card-text quantity">{{lemonade.volume}}</span></p>

                <div class="row">
                  <div class="col-sm-5 pr-0 my-auto">
                    <p class="card-text cost my-auto"><span class="card-text d-inline d-sm-none">{{lemonade.volume}}</span> {{lemonade.price | currency}}</p>
                  </div>
                  <div class="col-sm-7 pl-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto"
                      @click.prevent="addToCart(lemonade.id)"
                    >Замовити</button></div>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>

      <hr>

      <div class="row">

        <div class="col-sm-3">
          <div class="card card-cat mx-auto">
            <div class="m-auto text-center">
              <img
                src="~/assets/img/barbarescoDrinksFreshIcon.png"
                alt="icon"
                class="d-inline-block d-sm-none m-auto text-center"
                align="left"
                style="height:25px;"
              >
              <h2 class="text-center m-auto d-inline-block">СМУЗІ</h2>
              <b-img-lazy
                src="~/assets/img/barbarescoDrinksFreshIcon.png"
                alt="icon"
                class="m-auto d-none d-sm-block"
              ></b-img-lazy>
            </div>
          </div>

        </div>

        <div class="col-sm-9">
          <div class="row">
            <div
              class="card"
              v-for="smoothy in extractedProductsSmoothy"
              :key="smoothy.id"
            >

              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${smoothy.image + '.png'}`)"
                :alt="smoothy.name"
              >
              <div class="card-body">
                <h5
                  class="card-title mx-auto text-center crop"
                  style="cursor:context-menu"
                  v-b-tooltip.hover
                  :title="smoothy.name"
                >{{smoothy.name}}</h5>
                <p
                  class="card-text text-left ingredients d-none d-md-block"
                  style="cursor: context-menu;"
                  v-b-tooltip.hover
                  :title="smoothy.summary"
                >{{(smoothy.summary).slice(0, 30)}}...<span class="card-text quantity">{{smoothy.volume}}</span></p>

                <div class="row">
                  <div class="col-sm-5 pr-0 my-auto">
                    <p class="card-text cost my-auto"><span class="card-text d-inline d-sm-none">{{smoothy.volume}}</span> {{smoothy.price | currency}}</p>
                  </div>
                  <div class="col-sm-7 pl-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto"
                      @click.prevent="addToCart(smoothy.id)"
                    >Замовити</button></div>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>

      <hr>

      <div class="row">

        <div class="col-sm-3">
          <div class="card card-cat mx-auto">
            <div class="m-auto text-center">
              <img
                src="~/assets/img/barbarescoDrinksFreshIcon.png"
                alt="icon"
                class="d-inline-block d-sm-none m-auto text-center"
                align="left"
                style="height:25px;"
              >
              <h2 class="text-center m-auto d-inline-block">МІЛКШЕЙКИ</h2>
              <b-img-lazy
                src="~/assets/img/barbarescoDrinksFreshIcon.png"
                alt="icon"
                class="m-auto d-none d-sm-block"
              ></b-img-lazy>
            </div>
          </div>

        </div>

        <div class="col-sm-9">
          <div class="row">
            <div
              class="card"
              v-for="milkshake in extractedProductsMilkshake"
              :key="milkshake.id"
            >

              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${milkshake.image + '.png'}`)"
                :alt="milkshake.name"
              >
              <div class="card-body">
                <h5
                  class="card-title mx-auto text-center crop"
                  style="cursor:context-menu"
                  v-b-tooltip.hover
                  :title="milkshake.name"
                >{{milkshake.name}}</h5>
                <p
                  class="card-text text-left ingredients d-none d-md-block"
                  style="cursor: context-menu;"
                  v-b-tooltip.hover
                  :title="milkshake.summary"
                >{{(milkshake.summary).slice(0, 30)}}...<span class="card-text quantity">{{milkshake.volume}}</span></p>

                <div class="row">
                  <div class="col-sm-5 pr-0 my-auto">
                    <p class="card-text cost my-auto"><span class="card-text d-inline d-sm-none">{{milkshake.volume}}</span> {{milkshake.price | currency}}</p>
                  </div>
                  <div class="col-sm-7 pl-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto"
                      @click.prevent="addToCart(milkshake.id)"
                    >Замовити</button></div>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>

      <hr>

      <div class="row">

        <div class="col-sm-3">

          <div class="card card-cat mx-auto">
            <div class="m-auto text-center">
              <img
                src="~/assets/img/barbarescoDrinksFreshIcon.png"
                alt="icon"
                class="d-inline-block d-sm-none m-auto text-center"
                align="left"
                style="height:25px;"
              >
              <h2 class="text-center m-auto d-inline-block">БЕЗАЛКОГОЛЬНІ НАПОЇ</h2>
              <b-img-lazy
                src="~/assets/img/barbarescoDrinksFreshIcon.png"
                alt="icon"
                class="m-auto d-none d-sm-block"
              ></b-img-lazy>
            </div>
          </div>

        </div>

        <div class="col-sm-9">
          <div class="row">
            <div
              class="card"
              v-for="nonAlcoholicDrinks in extractedProductsNonAlcoholicDrinks"
              :key="nonAlcoholicDrinks.id"
            >

              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${nonAlcoholicDrinks.image + '.png'}`)"
                :alt="nonAlcoholicDrinks.name"
              >
              <div class="card-body">
                <h5
                  class="card-title mx-auto text-center crop"
                  style="cursor:context-menu"
                  v-b-tooltip.hover
                  :title="nonAlcoholicDrinks.name"
                >{{nonAlcoholicDrinks.name}}</h5>
                <p
                  class="card-text text-left ingredients d-none d-md-block"
                  style="cursor: context-menu;"
                  v-b-tooltip.hover
                  :title="nonAlcoholicDrinks.summary"
                >{{(nonAlcoholicDrinks.summary).slice(0, 30)}}...<span class="card-text quantity">{{nonAlcoholicDrinks.volume}}</span></p>

                <div class="row">
                  <div class="col-sm-5 pr-0 my-auto">
                    <p class="card-text cost my-auto"><span class="card-text d-inline d-sm-none">{{nonAlcoholicDrinks.volume}}</span> {{nonAlcoholicDrinks.price | currency}}</p>
                  </div>
                  <div class="col-sm-7 pl-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto"
                      @click.prevent="addToCart(nonAlcoholicDrinks.id)"
                    >Замовити</button></div>
                </div>

              </div>

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
  name: 'TheDrinks',
  data () {
    return {

    }
  },

  computed: {
    extractedProductsCoffee () {
      return productData.filter(el => el.category === "coffee")
    },
    extractedProductsTea () {
      return productData.filter(el => el.category === "tea")
    },
    extractedProductsFresh () {
      return productData.filter(el => el.category === "fresh")
    },
    extractedProductsLemonade () {
      return productData.filter(el => el.category === "lemonade")
    },
    extractedProductsSmoothy () {
      return productData.filter(el => el.category === "smoothy")
    },
    extractedProductsMilkshake () {
      return productData.filter(el => el.category === "milkshake")
    },
    extractedProductsNonAlcoholicDrinks () {
      return productData.filter(el => el.category === "nonAlcoholicDrinks")
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
@import "~assets/scss/productCardsWithCategories.scss";
</style>
