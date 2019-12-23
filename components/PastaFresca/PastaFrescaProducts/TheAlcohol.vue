<i18n>
{
  "uk": {
    "cocktail": "АЛКОГОЛЬНІ КОКТЕЙЛІ",
    "sets": "АЛКОГОЛЬНІ СЕТИ",
    "wine": "ВИНА",
    "sparklingWine": "ІГРИСТІ ВИНА",
    "alcoholicDrinks": "Алкогольні напої",
    "bear": "ПИВО",
    "italianWine": "Молоде італійське вино",
    "order": "Замовити"
  },
  "en": {
   "cocktail": "ALCOHOLIC COCKTAILS",
   "sets": "ALCOHOLIC SETS",
   "wine": "Wine",
   "sparklingWine": "SPARKLING WINES",
   "alcoholicDrinks": "Alcoholic Drinks",
    "bear": "Bear",
    "italianWine": "Young Italian wine",
    "order": "Order"
  },
  "ru": {
    "cocktail": "Алкогольные Коктейли",
    "sets": "АЛКОГОЛЬНЫЕ СЕТИ",
    "wine": "ВИНА",
    "sparklingWine": "игристые вина",
    "alcoholicDrinks": "Алкогольные напитки",
    "bear": "ПИВО",
    "italianWine": "Молодые итальянское вино",
    "order": "Заказать"
  }
}
</i18n>

<template>
  <div
    id="theAlcohol"
    class="container "
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
              <h2 class="text-center m-auto d-inline-block">
                {{ $t('cocktail') }}
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
              v-for="product in extractedProductsAlcoholicCocktail"
              :key="product.id"
              class="card"
            >
              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${product.image + '.jpg'}`) || require(`~/assets/img/barbarescoBurger.png`)"
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
                  {{ (product.summary).slice(0, 25) }}...<span class="card-text quantity">{{ product.volume }}</span>
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
                {{ $t('wine') }}
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
              v-for="product in extractedProductsWine"
              :key="product.id"
              class="card"
            >
              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${product.image + '.jpg'}`) || require(`~/assets/img/barbarescoBurger.png`)"
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
                  {{ (product.summary).slice(0, 25) }}...<span class="card-text quantity">{{ product.volume }}</span>
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
                {{ $t('sparklingWine') }}
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
              v-for="product in extractedProductsSparklingWine"
              :key="product.id"
              class="card"
            >
              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${product.image + '.jpg'}`) || require(`~/assets/img/barbarescoBurger.png`)"
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
                  {{ (product.summary).slice(0, 25) }}...<span class="card-text quantity">{{ product.volume }}</span>
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
                {{ $t('italianWine') }}
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
              v-for="product in extractedProductsItalianWine"
              :key="product.id"
              class="card"
            >
              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${product.image + '.jpg'}`) || require(`~/assets/img/barbarescoBurger.png`)"
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
                  {{ (product.summary).slice(0, 25) }}...<span class="card-text quantity">{{ product.volume }}</span>
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
                {{ $t('alcoholicDrinks') }}
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
              v-for="product in extractedProductsAlcoholicDrinks"
              :key="product.id"
              class="card"
            >
              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${product.image + '.jpg'}`) || require(`~/assets/img/barbarescoBurger.png`)"
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
                  {{ (product.summary).slice(0, 25) }}...<span class="card-text quantity">{{ product.volume }}</span>
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
                {{ $t('bear') }}
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
              v-for="product in extractedProductsBear"
              :key="product.id"
              class="card"
            >
              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${product.image + '.jpg'}`) || require(`~/assets/img/barbarescoBurger.png`)"
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
                  {{ (product.summary).slice(0, 25) }}...<span class="card-text quantity">{{ product.volume }}</span>
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
  name: 'TheAlcohol',
  data () {
    return {

    }
  },

  computed: {
    extractedProductsAlcoholicCocktail () {
      return productData.filter(el => el.category === 'pasta-fresca-alcoholicCocktail')
    },
    extractedProductsWine () {
      return productData.filter(el => el.category === 'pasta-fresca-wine')
    },
    extractedProductsSparklingWine () {
      return productData.filter(el => el.category === 'pasta-fresca-sparklingWine')
    },
    extractedProductsItalianWine () {
      return productData.filter(el => el.category === 'pasta-fresca-italianWine')
    },
    extractedProductsAlcoholicDrinks () {
      return productData.filter(el => el.category === 'pasta-fresca-alcoholicDrinks')
    },
    extractedProductsBear () {
      return productData.filter(el => el.category === 'pasta-fresca-bear')
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
