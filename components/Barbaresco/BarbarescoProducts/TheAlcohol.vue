<i18n>
{
  "uk": {
    "cocktail": "АЛКОГОЛЬНІ КОКТЕЙЛІ",
    "sets": "АЛКОГОЛЬНІ СЕТИ",
    "wine": "ВИНА",
    "sparklingWine": "ІГРИСТІ ВИНА",
    "alcoholicDrinks": "Алкогольні напої",
    "bear": "ПИВО",
    "order": "Замовити"
  },
  "en": {
   "cocktail": "ALCOHOLIC COCKTAILS",
   "sets": "ALCOHOLIC SETS",
   "wine": "Wine",
   "sparklingWine": "SPARKLING WINES",
   "alcoholicDrinks": "Alcoholic Drinks",
    "bear": "Bear",
    "order": "Order"
  },
  "ru": {
    "cocktail": "Алкогольные Коктейли",
    "sets": "АЛКОГОЛЬНЫЕ СЕТИ",
    "wine": "ВИНА",
    "sparklingWine": "игристые вина",
    "alcoholicDrinks": "Алкогольные напитки",
    "bear": "ПИВО",
    "order": "Заказать"
  }
}
</i18n>

<template>
  <div
    id="theAlcohol"
    class="container"
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
          <productCard :products="extractedProductsAlcoholicCocktail" />
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
                {{ $t('sets') }}
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
          <productCard :products="extractedProductsAlcoholicSet" />
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
          <productCard :products="extractedProductsWine" />
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
          <productCard :products="extractedProductsSparklingWine" />
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
          <productCard :products="extractedProductsAlcoholicDrinks" />
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
          <productCard :products="extractedProductsBear" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import barbarescoCollection from '~/gql/barbaresco'
import productCard from '~/components/Barbaresco/TheProductsCardCategories'

export default {
  name: 'TheAlcohol',
  components: {
    productCard
  },

  apollo: {
    barbarescoCollection: {
      prefetch: true,
      query: barbarescoCollection
    }
  },

  computed: {
    extractedProductsAlcoholicCocktail () {
      return this.$apolloData.data.barbarescoCollection.filter(el => el.category === 'barbaresco-alcoholicCocktail')
    },
    extractedProductsAlcoholicSet () {
      return this.$apolloData.data.barbarescoCollection.filter(el => el.category === 'barbaresco-alcoholicSet')
    },

    extractedProductsWine () {
      return this.$apolloData.data.barbarescoCollection.filter(el => el.category === 'barbaresco-wine')
    },

    extractedProductsSparklingWine () {
      return this.$apolloData.data.barbarescoCollection.filter(el => el.category === 'barbaresco-sparklingWine')
    },

    extractedProductsAlcoholicDrinks () {
      return this.$apolloData.data.barbarescoCollection.filter(el => el.category === 'barbaresco-alcoholicDrinks')
    },

    extractedProductsBear () {
      return this.$apolloData.data.barbarescoCollection.filter(el => el.category === 'barbaresco-bear')
    }

  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/productCardsWithCategories.scss";
</style>
