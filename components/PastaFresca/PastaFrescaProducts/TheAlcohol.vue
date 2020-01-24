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
                src="~/assets/img/barbarescoDrinksFreshIconWhite.png"
                alt="icon"
                class="d-inline-block d-sm-none m-auto text-center"
                align="left"
                style="height:25px;"
              >
              <h2 class="text-center m-auto d-inline-block">
                {{ $t('cocktail') }}
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
          <productCard :products="alcoholicCocktail" />
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
                {{ $t('wine') }}
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
          <productCard :products="wine" />
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
                {{ $t('sparklingWine') }}
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
          <productCard :products="sparklingWine" />
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
                {{ $t('italianWine') }}
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
          <productCard :products="italianWine" />
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
                {{ $t('alcoholicDrinks') }}
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
          <productCard :products="alcoholicDrinks" />
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
                {{ $t('bear') }}
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
          <productCard :products="bear" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { alcoholicCocktail, wine, sparklingWine, italianWine, alcoholicDrinks, bear } from '~/gql/pastaFrescaAlcohol.js'
import productCard from '~/components/PastaFresca/TheProductsCardCategories'

export default {
  name: 'TheAlcohol',
  components: {
    productCard
  },

  apollo: {
    alcoholicCocktail: {
      prefetch: true,
      query: alcoholicCocktail
    },
    wine: {
      prefetch: true,
      query: wine
    },
    sparklingWine: {
      prefetch: true,
      query: sparklingWine
    },
    italianWine: {
      prefetch: true,
      query: italianWine
    },
    alcoholicDrinks: {
      prefetch: true,
      query: alcoholicDrinks
    },
    bear: {
      prefetch: true,
      query: bear
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/productCardsWithCategoriesWhite.scss";
</style>
