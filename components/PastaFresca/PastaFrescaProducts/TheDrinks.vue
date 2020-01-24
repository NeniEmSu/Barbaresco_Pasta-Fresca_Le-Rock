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
                src="~/assets/img/barbarescoDrinksCoffeIconWhite.png"
                alt="icon"
                class="d-inline-block d-sm-none m-auto text-center"
                align="left"
                style="height:25px;"
              >
              <h2 class="text-center m-auto d-inline-block">
                {{ $t('coffee') }}
              </h2>
              <b-img-lazy
                src="~/assets/img/barbarescoDrinksCoffeIconWhite.png"
                alt="icon"
                class="m-auto d-none d-sm-block"
              />
            </div>
          </div>
        </div>

        <div class="col-sm-9">
          <productCard :products="coffee" />
        </div>
      </div>

      <hr>

      <div class="row">
        <div class="col-sm-3">
          <div class="card card-cat mx-auto">
            <div class="m-auto text-center">
              <img
                src="~/assets/img/barbarescoDrinksTeaLeafIconWhite.png"
                alt="icon"
                class="d-inline-block d-sm-none m-auto text-center"
                align="left"
                style="height:25px;"
              >
              <h2 class="text-center m-auto d-inline-block">
                {{ $t('tea') }}
              </h2>
              <b-img-lazy
                src="~/assets/img/barbarescoDrinksTeaLeafIconWhite.png"
                alt="icon"
                class="m-auto d-none d-sm-block"
              />
            </div>
          </div>
        </div>
        <div class="col-sm-9">
          <productCard :products="tea" />
        </div>
      </div>

      <hr>

      <div class="row">
        <div class="col-sm-3">
          <div class="card card-cat mx-auto">
            <div class="m-auto text-center">
              <img
                src="~/assets/img/barbarescoDrinksFreshIconWhite.png"
                alt="icon"
                class="d-inline-block d-sm-none m-auto text-center"
                align="left"
                style="height:25px;"
              >
              <h2 class="text-center m-auto d-inline-block">
                {{ $t('coldDrinks') }}
              </h2>
              <b-img-lazy
                src="~/assets/img/barbarescoDrinksFreshIconWhite.png"
                alt="icon"
                class="m-auto d-none d-sm-block"
              />
            </div>
          </div>
        </div>

        <div class="col-sm-9">
          <productCard :products="fresh" />
        </div>
      </div>

      <hr>

      <div class="row">
        <div class="col-sm-3">
          <div class="card card-cat mx-auto">
            <div class="m-auto text-center">
              <img
                src="~/assets/img/barbarescoDrinksFreshIconWhite.png"
                alt="icon"
                class="d-inline-block d-sm-none m-auto text-center"
                align="left"
                style="height:25px;"
              >
              <h2 class="text-center m-auto d-inline-block">
                {{ $t('lemonade') }}
              </h2>
              <b-img-lazy
                src="~/assets/img/barbarescoDrinksFreshIconWhite.png"
                alt="icon"
                class="m-auto d-none d-sm-block"
              />
            </div>
          </div>
        </div>

        <div class="col-sm-9">
          <productCard :products="lemonade" />
        </div>
      </div>

      <hr>

      <div class="row">
        <div class="col-sm-3">
          <div class="card card-cat mx-auto">
            <div class="m-auto text-center">
              <img
                src="~/assets/img/barbarescoDrinksFreshIconWhite.png"
                alt="icon"
                class="d-inline-block d-sm-none m-auto text-center"
                align="left"
                style="height:25px;"
              >
              <h2 class="text-center m-auto d-inline-block">
                {{ $t('noneAlcoholicDrinks') }}
              </h2>
              <b-img-lazy
                src="~/assets/img/barbarescoDrinksFreshIconWhite.png"
                alt="icon"
                class="m-auto d-none d-sm-block"
              />
            </div>
          </div>
        </div>

        <div class="col-sm-9">
          <productCard :products="nonAlcoholicDrinks" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { coffee, lemonade, nonAlcoholicDrinks, fresh, tea } from '~/gql/pastaFrescaDrinks.js'
import productCard from '~/components/PastaFresca/TheProductsCardCategories'
export default {
  name: 'TheDrinks',
  components: {
    productCard
  },

  apollo: {
    coffee: {
      prefetch: true,
      query: coffee
    },
    lemonade: {
      prefetch: true,
      query: lemonade
    },
    nonAlcoholicDrinks: {
      prefetch: true,
      query: nonAlcoholicDrinks
    },
    fresh: {
      prefetch: true,
      query: fresh
    },
    tea: {
      prefetch: true,
      query: tea
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/productCardsWithCategoriesWhite.scss";
</style>
