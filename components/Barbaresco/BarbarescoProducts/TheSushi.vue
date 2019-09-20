<i18n>
{
  "uk": {
    "makiRoll": "РОЛИ МАКІ",
    "futoMakiRoll": "РОЛИ ФУТОМАКІ",
    "originalRolls": "ОРИГІНАЛЬНІ РОЛИ",
    "californiaRolls": "РОЛИ КАЛІФОРНІЯ",
    "philiRolls": "РОЛИ ФІЛАДЕЛЬФІЯ",
    "drakonRolls": "РОЛИ ДРАКОНИ"
  },
  "en": {
   "makiRoll": "Maki Rolls",
   "futoMakiRoll": "FUTOMAKI Rolls",
   "originalRolls": "ORIGINAL ROLls",
   "californiaRolls": "CALIFORNIA ROLLS",
   "philiRolls": "PHILADELPHIA ROLLS",
    "drakonRolls": "DRAGONS ROLLs"
  },
  "ru": {
    "makiRoll": "РОЛЛЫ МАКИ",
    "futoMakiRoll": "РОЛЛЫ Футомаки",
    "originalRolls": "ОРИГИНАЛЬНЫЕ РОЛЛЫ",
    "californiaRolls": "Роллы Калифорния",
    "philiRolls": "РОЛЛЫ ФИЛАДЕЛЬФИЯ",
    "drakonRolls": "Рулонные драконы"
  }
}
</i18n>

<template>
  <div
    class="container "
    id="theSushi"
  >

    <div class="content">

      <div class="row">

        <div class="col-sm-3">
          <div class="card card-cat mx-auto">
            <div class="m-auto text-center">
              <img
                src="~/assets/img/barbarescoSushiIcon.svg"
                alt="icon"
                class="d-inline-block d-sm-none m-auto text-center"
                align="left"
                style="height:25px;"
              >
              <h2 class="text-center m-auto d-inline-block"> {{$t('makiRoll')}}</h2>
              <b-img-lazy
                src="~/assets/img/barbarescoSushiIcon.svg"
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
              v-for="product in extractedProductsMakiRolls"
              :key="product.id"
            >

              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${product.image + '.jpg'}`)"
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
                  class="card-text text-left ingredients d-none d-sm-block"
                  style="cursor: context-menu;"
                  v-b-tooltip.hover
                  :title="product.summary"
                >{{(product.summary).slice(0, 25)}}...<span class="card-text quantity">{{product.volume}}</span></p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto"><span class="card-text d-inline d-sm-none">{{product.volume}}</span> {{product.price | currency}}</p>

                  </div>
                  <div class="col-sm-7 pl-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto"
                      @click.prevent="addToCart(product.id)"
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
                src="~/assets/img/barbarescoSushiIcon.svg"
                alt="icon"
                class="d-inline-block d-sm-none m-auto text-center"
                align="left"
                style="height:25px;"
              >
              <h2 class="text-center m-auto d-inline-block">{{$t('futoMakiRoll')}}</h2>
              <b-img-lazy
                src="~/assets/img/barbarescoSushiIcon.svg"
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
              v-for="product in extractedProductsPhotoMakiRolls"
              :key="product.id"
            >

              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${product.image + '.jpg'}`)"
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
                  class="card-text text-left ingredients d-none d-md-block"
                  style="cursor: context-menu;"
                  v-b-tooltip.hover
                  :title="product.summary"
                >{{(product.summary).slice(0, 25)}}...<span class="card-text quantity">{{product.volume}}</span></p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto"><span class="card-text d-inline d-sm-none">{{product.volume}}</span> {{product.price | currency}}</p>
                  </div>
                  <div class="col-sm-7 pl-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto"
                      @click.prevent="addToCart(product.id)"
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
                src="~/assets/img/barbarescoSushiIcon.svg"
                alt="icon"
                class="d-inline-block d-sm-none m-auto text-center"
                align="left"
                style="height:25px;"
              >
              <h2 class="text-center m-auto d-inline-block">{{$t('originalRolls')}}</h2>
              <b-img-lazy
                src="~/assets/img/barbarescoSushiIcon.svg"
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
              v-for="product in extractedProductsOriginalRoll"
              :key="product.id"
            >

              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${product.image + '.jpg'}`)"
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
                  class="card-text text-left ingredients d-none d-md-block"
                  style="cursor: context-menu;"
                  v-b-tooltip.hover
                  :title="product.summary"
                >{{(product.summary).slice(0, 25)}}...<span class="card-text quantity">{{product.volume}}</span></p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto"><span class="card-text d-inline d-sm-none">{{product.volume}}</span> {{product.price | currency}}</p>
                  </div>
                  <div class="col-sm-7 pl-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto"
                      @click.prevent="addToCart(product.id)"
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
                src="~/assets/img/barbarescoSushiIcon.svg"
                alt="icon"
                class="d-inline-block d-sm-none m-auto text-center"
                align="left"
                style="height:25px;"
              >
              <h2 class="text-center m-auto d-inline-block">{{$t('californiaRolls')}}</h2>
              <b-img-lazy
                src="~/assets/img/barbarescoSushiIcon.svg"
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
              v-for="product in extractedProductsCaliforniaRoll"
              :key="product.id"
            >

              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${product.image + '.jpg'}`)"
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
                  class="card-text text-left ingredients d-none d-md-block"
                  style="cursor: context-menu;"
                  v-b-tooltip.hover
                  :title="product.summary"
                >{{(product.summary).slice(0, 25)}}...<span class="card-text quantity">{{product.volume}}</span></p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto"><span class="card-text d-inline d-sm-none">{{product.volume}}</span> {{product.price | currency}}</p>
                  </div>
                  <div class="col-sm-7 pl-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto"
                      @click.prevent="addToCart(product.id)"
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
                src="~/assets/img/barbarescoSushiIcon.svg"
                alt="icon"
                class="d-inline-block d-sm-none m-auto text-center"
                align="left"
                style="height:25px;"
              >
              <h2 class="text-center m-auto d-inline-block">{{$t('philiRolls')}}</h2>
              <b-img-lazy
                src="~/assets/img/barbarescoSushiIcon.svg"
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
              v-for="product in extractedProductsPhiladelphiaRoll"
              :key="product.id"
            >

              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${product.image + '.jpg'}`)"
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
                  class="card-text text-left ingredients d-none d-md-block"
                  style="cursor: context-menu;"
                  v-b-tooltip.hover
                  :title="product.summary"
                >{{(product.summary).slice(0, 25)}}...<span class="card-text quantity">{{product.volume}}</span></p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto"><span class="card-text d-inline d-sm-none">{{product.volume}}</span> {{product.price | currency}}</p>
                  </div>
                  <div class="col-sm-7 pl-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto"
                      @click.prevent="addToCart(product.id)"
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
                src="~/assets/img/barbarescoSushiIcon.svg"
                alt="icon"
                class="d-inline-block d-sm-none m-auto text-center"
                align="left"
                style="height:25px;"
              >
              <h2 class="text-center m-auto d-inline-block">{{$t('drakonRolls')}}</h2>
              <b-img-lazy
                src="~/assets/img/barbarescoSushiIcon.svg"
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
              v-for="product in extractedProductsDrakoniRoll"
              :key="product.id"
            >

              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${product.image + '.jpg'}`)"
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
                  class="card-text text-left ingredients d-none d-md-block"
                  style="cursor: context-menu;"
                  v-b-tooltip.hover
                  :title="product.summary"
                >{{(product.summary).slice(0, 25)}}...<span class="card-text quantity">{{product.volume}}</span></p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto"><span class="card-text d-inline d-sm-none">{{product.volume}}</span> {{product.price | currency}}</p>
                  </div>
                  <div class="col-sm-7 pl-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto"
                      @click.prevent="addToCart(product.id)"
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
  name: 'TheSushi',
  data () {
    return {


    }
  },

  computed: {
    extractedProductsMakiRolls () {
      return productData.filter(el => el.category === "barbbaresco-makiRoll")
    },
    extractedProductsPhotoMakiRolls () {
      return productData.filter(el => el.category === "barbbaresco-futoMakiRoll")
    },
    extractedProductsOriginalRoll () {
      return productData.filter(el => el.category === "barbbaresco-originalRoll")
    },
    extractedProductsCaliforniaRoll () {
      return productData.filter(el => el.category === "barbbaresco-californiaRoll")
    },
    extractedProductsPhiladelphiaRoll () {
      return productData.filter(el => el.category === "barbbaresco-PhiladelphiaRoll")
    },
    extractedProductsDrakoniRoll () {
      return productData.filter(el => el.category === "barbbaresco-drakoniRoll")
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
