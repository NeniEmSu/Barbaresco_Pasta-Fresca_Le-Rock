<i18n>
{
  "uk": {
    "cocktail": "АЛКОГОЛЬНІ КОКТЕЙЛІ",
    "sets": "АЛКОГОЛЬНІ СЕТИ",
    "wine": "ВИНА",
    "sparklingWine": "ІГРИСТІ ВИНА",
    "alcoholicDrinks": "Алкогольні напої",
    "bear": "ПИВО"
  },
  "en": {
   "cocktail": "ALCOHOLIC COCKTAILS",
   "sets": "ALCOHOLIC SETS",
   "wine": "Wine",
   "sparklingWine": "SPARKLING WINES",
   "alcoholicDrinks": "Alcoholic Drinks",
    "bear": "Bear"
  },
  "ru": {
    "cocktail": "Алкогольные Коктейли",
    "sets": "АЛКОГОЛЬНЫЕ СЕТИ",
    "wine": "ВИНА",
    "sparklingWine": "игристые вина",
    "alcoholicDrinks": "Алкогольные напитки",
    "bear": "ПИВО"
  }
}
</i18n>

<template>
  <div
    class="container "
    id="theAlcohol"
  >

    <div class="content">

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
              <h2 class="text-center m-auto d-inline-block"> {{$t('cocktail')}}</h2>
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
              v-for="alcoholicCocktail in extractedProductsAlcoholicCocktail"
              :key="alcoholicCocktail.id"
            >

              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${alcoholicCocktail.image + '.png'}`)"
                :alt="alcoholicCocktail.name"
              >
              <div class="card-body">
                <h5
                  class="card-title mx-auto text-center crop"
                  style="cursor:context-menu"
                  v-b-tooltip.hover
                  :title="alcoholicCocktail.name"
                >{{alcoholicCocktail.name}}</h5>
                <p
                  class="card-text text-left ingredients d-none d-sm-block"
                  style="cursor: context-menu;"
                  v-b-tooltip.hover
                  :title="alcoholicCocktail.summary"
                >{{(alcoholicCocktail.summary).slice(0, 25)}}...<span class="card-text quantity">{{alcoholicCocktail.volume}}</span></p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto"><span class="card-text d-inline d-sm-none">{{alcoholicCocktail.volume}}</span> {{alcoholicCocktail.price | currency}}</p>

                  </div>
                  <div class="col-sm-7 pl-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto"
                      @click.prevent="addToCart(alcoholicCocktail.id)"
                    >{{$t('order')}}</button></div>
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
              <h2 class="text-center m-auto d-inline-block">{{$t('sets')}}</h2>
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
              v-for="alcoholicSet in extractedProductsAlcoholicSet"
              :key="alcoholicSet.id"
            >

              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${alcoholicSet.image + '.png'}`)"
                :alt="alcoholicSet.name"
              >
              <div class="card-body">
                <h5
                  class="card-title mx-auto text-center crop"
                  style="cursor:context-menu"
                  v-b-tooltip.hover
                  :title="alcoholicSet.name"
                >{{alcoholicSet.name}}</h5>
                <p
                  class="card-text text-left ingredients d-none d-md-block"
                  style="cursor: context-menu;"
                  v-b-tooltip.hover
                  :title="alcoholicSet.summary"
                >{{(alcoholicSet.summary).slice(0, 25)}}...<span class="card-text quantity">{{alcoholicSet.volume}}</span></p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto"><span class="card-text d-inline d-sm-none">{{alcoholicSet.volume}}</span> {{alcoholicSet.price | currency}}</p>
                  </div>
                  <div class="col-sm-7 pl-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto"
                      @click.prevent="addToCart(alcoholicSet.id)"
                    >{{$t('order')}}</button></div>
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
              <h2 class="text-center m-auto d-inline-block">{{$t('wine')}}</h2>
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
              v-for="wine in extractedProductsWine"
              :key="wine.id"
            >

              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${wine.image + '.png'}`)"
                :alt="wine.name"
              >
              <div class="card-body">
                <h5
                  class="card-title mx-auto text-center crop"
                  style="cursor:context-menu"
                  v-b-tooltip.hover
                  :title="wine.name"
                >{{wine.name}}</h5>
                <p
                  class="card-text text-left ingredients d-none d-md-block"
                  style="cursor: context-menu;"
                  v-b-tooltip.hover
                  :title="wine.summary"
                >{{(wine.summary).slice(0, 25)}}...<span class="card-text quantity">{{wine.volume}}</span></p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto"><span class="card-text d-inline d-sm-none">{{wine.volume}}</span> {{wine.price | currency}}</p>
                  </div>
                  <div class="col-sm-7 pl-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto"
                      @click.prevent="addToCart(wine.id)"
                    >{{$t('order')}}</button></div>
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
              <h2 class="text-center m-auto d-inline-block">{{$t('sparklingWine')}}</h2>
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
              v-for="sparklingWine in extractedProductsSparklingWine"
              :key="sparklingWine.id"
            >

              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${sparklingWine.image + '.png'}`)"
                :alt="sparklingWine.name"
              >
              <div class="card-body">
                <h5
                  class="card-title mx-auto text-center crop"
                  style="cursor:context-menu"
                  v-b-tooltip.hover
                  :title="sparklingWine.name"
                >{{sparklingWine.name}}</h5>
                <p
                  class="card-text text-left ingredients d-none d-md-block"
                  style="cursor: context-menu;"
                  v-b-tooltip.hover
                  :title="sparklingWine.summary"
                >{{(sparklingWine.summary).slice(0, 25)}}...<span class="card-text quantity">{{sparklingWine.volume}}</span></p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto"><span class="card-text d-inline d-sm-none">{{sparklingWine.volume}}</span> {{sparklingWine.price | currency}}</p>
                  </div>
                  <div class="col-sm-7 pl-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto"
                      @click.prevent="addToCart(sparklingWine.id)"
                    >{{$t('order')}}</button></div>
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
              <h2 class="text-center m-auto d-inline-block">{{$t('alcoholicDrinks')}}</h2>
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
              v-for="alcoholicDrinks in extractedProductsAlcoholicDrinks"
              :key="alcoholicDrinks.id"
            >

              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${alcoholicDrinks.image + '.png'}`)"
                :alt="alcoholicDrinks.name"
              >
              <div class="card-body">
                <h5
                  class="card-title mx-auto text-center crop"
                  style="cursor:context-menu"
                  v-b-tooltip.hover
                  :title="alcoholicDrinks.name"
                >{{alcoholicDrinks.name}}</h5>
                <p
                  class="card-text text-left ingredients d-none d-md-block"
                  style="cursor: context-menu;"
                  v-b-tooltip.hover
                  :title="alcoholicDrinks.summary"
                >{{(alcoholicDrinks.summary).slice(0, 25)}}...<span class="card-text quantity">{{alcoholicDrinks.volume}}</span></p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto"><span class="card-text d-inline d-sm-none">{{alcoholicDrinks.volume}}</span> {{alcoholicDrinks.price | currency}}</p>
                  </div>
                  <div class="col-sm-7 pl-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto"
                      @click.prevent="addToCart(alcoholicDrinks.id)"
                    >{{$t('order')}}</button></div>
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
              <h2 class="text-center m-auto d-inline-block">{{$t('bear')}}</h2>
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
              v-for="bear in extractedProductsBear"
              :key="bear.id"
            >

              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${bear.image + '.png'}`)"
                :alt="bear.name"
              >
              <div class="card-body">
                <h5
                  class="card-title mx-auto text-center crop"
                  style="cursor:context-menu"
                  v-b-tooltip.hover
                  :title="bear.name"
                >{{bear.name}}</h5>
                <p
                  class="card-text text-left ingredients d-none d-md-block"
                  style="cursor: context-menu;"
                  v-b-tooltip.hover
                  :title="bear.summary"
                >{{(bear.summary).slice(0, 25)}}...<span class="card-text quantity">{{bear.volume}}</span></p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto"><span class="card-text d-inline d-sm-none">{{bear.volume}}</span> {{bear.price | currency}}</p>
                  </div>
                  <div class="col-sm-7 pl-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto"
                      @click.prevent="addToCart(bear.id)"
                    >{{$t('order')}}</button></div>
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
  name: 'TheAlcohol',
  data () {
    return {


    }
  },

  computed: {
    extractedProductsAlcoholicCocktail () {
      return productData.filter(el => el.category === "alcoholicCocktail")
    },
    extractedProductsAlcoholicSet () {
      return productData.filter(el => el.category === "alcoholicSet")
    },
    extractedProductsWine () {
      return productData.filter(el => el.category === "wine")
    },
    extractedProductsSparklingWine () {
      return productData.filter(el => el.category === "sparklingWine")
    },
    extractedProductsAlcoholicDrinks () {
      return productData.filter(el => el.category === "alcoholicDrinks")
    },
    extractedProductsBear () {
      return productData.filter(el => el.category === "bear")
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
