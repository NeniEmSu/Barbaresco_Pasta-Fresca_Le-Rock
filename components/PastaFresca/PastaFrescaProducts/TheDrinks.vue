<i18n>
{
  "uk": {
    "coffee": "КАВА",
    "tea": "ЧАЙ",
    "coldDrinks": "ХОЛОДНІ НАПОЇ",
    "lemonade": "ЛИМОНАДИ",
    "smoothy": "СМУЗІ",
    "milkShake": "МІЛКШЕЙКИ",
    "noneAlcoholicDrinks": "БЕЗАЛКОГОЛЬНІ НАПОЇ"
  },
  "en": {
   "coffee": "COFFEE",
   "tea": "Tea",
   "coldDrinks": "Cold Drinks",
   "lemonade": "Lemonade",
   "smoothy": "Smoothies",
    "milkShake": "MILKSHAKES",
    "noneAlcoholicDrinks": "NON-ALCOHOLIC BEVERAGES"
  },
  "ru": {
    "coffee": "КОФЕ",
    "tea": "ЧАЙ",
    "coldDrinks": "ХОЛОДНЫЕ НАПИТКИ",
    "lemonade": "ЛИМОНАД",
    "smoothy": "ПОЛОСЕ",
    "milkShake": "Милкшейк",
    "noneAlcoholicDrinks": "безалкогольные напитки"
  }
}
</i18n>

<template>
  <div
    id="drinks"
    class="container "
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
              <h2 class="text-center m-auto d-inline-block">
                {{ $t('coffee') }}
              </h2>
              <b-img-lazy
                src="~/assets/img/barbarescoDrinksCoffeIcon.png"
                alt="icon"
                class="m-auto d-none d-sm-block"
              />
            </div>
          </div>
        </div>

        <div class="col-sm-9">
          <div class="row">
            <div
              v-for="product in extractedProductsCoffee"
              :key="product.id"
              class="card"
            >
              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${product.image + '.jpg'}`)"
                :alt="product.name"
              >
              <div class="card-body">
                <h5
                  v-b-tooltip.hover
                  class="card-title mx-auto text-center crop"
                  style="cursor:context-menu"
                  :title="product.name"
                >
                  {{ product.name }}
                </h5>
                <p
                  v-b-tooltip.hover
                  class="card-text text-left ingredients d-none d-sm-block"
                  style="cursor: context-menu;"
                  :title="product.summary"
                >
                  {{ (product.summary).slice(0, 30) }}...<span class="card-text quantity">{{ product.volume }}</span>
                </p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto">
                      <span class="card-text d-inline d-sm-none">{{ product.volume }}</span> {{ product.price | currency }}
                    </p>
                  </div>
                  <div class="col-sm-7 pl-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto"
                      @click.prevent="addToCart(product.id)"
                    >
                      {{ $t('order') }}
                    </button>
                  </div>
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
              <h2 class="text-center m-auto d-inline-block">
                {{ $t('tea') }}
              </h2>
              <b-img-lazy
                src="~/assets/img/barbarescoDrinksTeaLeafIcon.png"
                alt="icon"
                class="m-auto d-none d-sm-block"
              />
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
              v-for="product in extractedProductsTea"
              :key="product.id"
              class="card"
            >
              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${product.image + '.jpg'}`)"
                :alt="product.name"
              >
              <div class="card-body">
                <h5
                  v-b-tooltip.hover
                  class="card-title mx-auto text-center crop"
                  style="cursor:context-menu"
                  :title="product.name"
                >
                  {{ product.name }}
                </h5>
                <p
                  v-b-tooltip.hover
                  class="card-text text-left ingredients d-none d-md-block"
                  style="cursor: context-menu;"
                  :title="product.summary"
                >
                  {{ (product.summary).slice(0, 30) }}...<span class="card-text quantity">{{ product.volume }}</span>
                </p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto">
                      <span class="card-text d-inline d-sm-none">{{ product.volume }}</span> {{ product.price | currency }}
                    </p>
                  </div>
                  <div class="col-sm-7 pl-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto"
                      @click.prevent="addToCart(product.id)"
                    >
                      {{ $t('order') }}
                    </button>
                  </div>
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
              <h2 class="text-center m-auto d-inline-block">
                {{ $t('coldDrinks') }}
              </h2>
              <b-img-lazy
                src="~/assets/img/barbarescoDrinksFreshIcon.png"
                alt="icon"
                class="m-auto d-none d-sm-block"
              />
            </div>
          </div>
        </div>

        <div class="col-sm-9">
          <div class="row">
            <div
              v-for="product in extractedProductsFresh"
              :key="product.id"
              class="card"
            >
              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${product.image + '.jpg'}`)"
                :alt="product.name"
              >
              <div class="card-body">
                <h5
                  v-b-tooltip.hover
                  class="card-title mx-auto text-center crop"
                  style="cursor:context-menu"
                  :title="product.name"
                >
                  {{ product.name }}
                </h5>
                <p
                  v-b-tooltip.hover
                  class="card-text text-left ingredients d-none d-md-block"
                  style="cursor: context-menu;"
                  :title="product.summary"
                >
                  {{ (product.summary).slice(0, 30) }}...<span class="card-text quantity">{{ product.volume }}</span>
                </p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto">
                      <span class="card-text d-inline d-sm-none">{{ product.volume }}</span> {{ product.price | currency }}
                    </p>
                  </div>
                  <div class="col-sm-7 pl-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto"
                      @click.prevent="addToCart(product.id)"
                    >
                      {{ $t('order') }}
                    </button>
                  </div>
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
              <h2 class="text-center m-auto d-inline-block">
                {{ $t('lemonade') }}
              </h2>
              <b-img-lazy
                src="~/assets/img/barbarescoDrinksFreshIcon.png"
                alt="icon"
                class="m-auto d-none d-sm-block"
              />
            </div>
          </div>
        </div>

        <div class="col-sm-9">
          <div class="row">
            <div
              v-for="product in extractedProductsLemonade"
              :key="product.id"
              class="card"
            >
              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${product.image + '.jpg'}`)"
                :alt="product.name"
              >
              <div class="card-body">
                <h5
                  v-b-tooltip.hover
                  class="card-title mx-auto text-center crop"
                  style="cursor:context-menu"
                  :title="product.name"
                >
                  {{ product.name }}
                </h5>
                <p
                  v-b-tooltip.hover
                  class="card-text text-left ingredients d-none d-md-block"
                  style="cursor: context-menu;"
                  :title="product.summary"
                >
                  {{ (product.summary).slice(0, 30) }}...<span class="card-text quantity">{{ product.volume }}</span>
                </p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto">
                      <span class="card-text d-inline d-sm-none">{{ product.volume }}</span> {{ product.price | currency }}
                    </p>
                  </div>
                  <div class="col-sm-7 pl-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto"
                      @click.prevent="addToCart(product.id)"
                    >
                      {{ $t('order') }}
                    </button>
                  </div>
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
              <h2 class="text-center m-auto d-inline-block">
                {{ $t('noneAlcoholicDrinks') }}
              </h2>
              <b-img-lazy
                src="~/assets/img/barbarescoDrinksFreshIcon.png"
                alt="icon"
                class="m-auto d-none d-sm-block"
              />
            </div>
          </div>
        </div>

        <div class="col-sm-9">
          <div class="row">
            <div
              v-for="product in extractedProductsNonAlcoholicDrinks"
              :key="product.id"
              class="card"
            >
              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${product.image + '.jpg'}`)"
                :alt="product.name"
              >
              <div class="card-body">
                <h5
                  v-b-tooltip.hover
                  class="card-title mx-auto text-center crop"
                  style="cursor:context-menu"
                  :title="product.name"
                >
                  {{ product.name }}
                </h5>
                <p
                  v-b-tooltip.hover
                  class="card-text text-left ingredients d-none d-md-block"
                  style="cursor: context-menu;"
                  :title="product.summary"
                >
                  {{ (product.summary).slice(0, 30) }}...<span class="card-text quantity">{{ product.volume }}</span>
                </p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto">
                      <span class="card-text d-inline d-sm-none">{{ product.volume }}</span> {{ product.price | currency }}
                    </p>
                  </div>
                  <div class="col-sm-7 pl-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto"
                      @click.prevent="addToCart(product.id)"
                    >
                      {{ $t('order') }}
                    </button>
                  </div>
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
import productData from '~/plugins/api/products.js'
export default {
  name: 'TheDrinks',
  data () {
    return {

    }
  },

  computed: {
    extractedProductsCoffee () {
      return productData.filter(el => el.category === 'pasta-fresca-coffee')
    },
    extractedProductsTea () {
      return productData.filter(el => el.category === 'pasta-fresca-tea')
    },
    extractedProductsFresh () {
      return productData.filter(el => el.category === 'pasta-fresca-fresh')
    },
    extractedProductsLemonade () {
      return productData.filter(el => el.category === 'pasta-fresca-lemonade')
    },
    extractedProductsNonAlcoholicDrinks () {
      return productData.filter(el => el.category === 'pasta-fresca-nonAlcoholicDrinks')
    }
  },

  methods: {
    addToCart (id, append = false) {
      this.$store.dispatch('addToCart', id)
      this.$bvToast.toast(`${this.$store.getters.toast.text}`, {
        title: 'Увага!',
        autoHideDelay: 500,
        toaster: 'b-toaster-bottom-right',
        appendToast: append
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/productCardsWithCategoriesWhite.scss";
</style>
