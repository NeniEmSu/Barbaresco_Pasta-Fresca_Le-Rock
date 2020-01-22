<i18n>
{
  "uk": {
    "coffee": "КАВА",
    "tea": "ЧАЙ",
    "coldDrinks": "ХОЛОДНІ НАПОЇ",
    "lemonade": "ЛИМОНАДИ",
    "smoothy": "СМУЗІ",
    "milkShake": "МІЛКШЕЙКИ",
    "noneAlcoholicDrinks": "БЕЗ АЛКОГОЛЬНІ НАПОЇ",
    "order": "Замовити"
  },
  "en": {
   "coffee": "COFFEE",
   "tea": "Tea",
   "coldDrinks": "Cold Drinks",
   "lemonade": "Lemonade",
   "smoothy": "Smoothies",
    "milkShake": "MILKSHAKES",
    "noneAlcoholicDrinks": "NON ALCOHOLIC BEVERAGES",
    "order": "Order"
  },
  "ru": {
    "coffee": "КОФЕ",
    "tea": "ЧАЙ",
    "coldDrinks": "ХОЛОДНЫЕ НАПИТКИ",
    "lemonade": "ЛИМОНАД",
    "smoothy": "ПОЛОСЕ",
    "milkShake": "Милкшейк",
    "noneAlcoholicDrinks": "без алкогольные напитки",
    "order": "Заказать"
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
          <productCard :products="extractedProductsCoffee" />
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
        </div>
        <div class="col-sm-9">
          <productCard :products="extractedProductsTea" />
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
          <productCard :products="extractedProductsFresh" />
        </div>
      </div>

      <hr>

      <div
        v-if="$i18n.locale === 'en'"
        class="row"
      >
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
          <productCard :products="extractedProductsLemonade" />
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
                {{ $t('smoothy') }}
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
          <productCard :products="extractedProductsSmoothy" />
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
                {{ $t('milkShake') }}
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
          <productCard :products="extractedProductsMilkshake" />
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
          <productCard :products="extractedProductsNonAlcoholicDrinks" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import barbarescoCollection from '~/gql/barbaresco'
import productCard from '~/components/Barbaresco/TheProductsCardCategories'
export default {
  name: 'TheDrinks',

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
    extractedProductsCoffee () {
      return this.$apolloData.data.barbarescoCollection.filter(el => el.category === 'barbaresco-coffee')
    },

    extractedProductsTea () {
      return this.$apolloData.data.barbarescoCollection.filter(el => el.category === 'barbaresco-tea')
    },

    extractedProductsFresh () {
      return this.$apolloData.data.barbarescoCollection.filter(el => el.category === 'barbaresco-fresh')
    },

    extractedProductsLemonade () {
      return this.$apolloData.data.barbarescoCollection.filter(el => el.category === 'barbaresco-lemonade')
    },

    extractedProductsSmoothy () {
      return this.$apolloData.data.barbarescoCollection.filter(el => el.category === 'barbaresco-smoothy')
    },

    extractedProductsMilkshake () {
      return this.$apolloData.data.barbarescoCollection.filter(el => el.category === 'barbaresco-milkshake')
    },

    extractedProductsNonAlcoholicDrinks () {
      return this.$apolloData.data.barbarescoCollection.filter(el => el.category === 'barbaresco-nonAlcoholicDrinks')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/productCardsWithCategories.scss";
</style>
