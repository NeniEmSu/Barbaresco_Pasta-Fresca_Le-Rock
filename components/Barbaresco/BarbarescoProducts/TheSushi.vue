<i18n>
{
  "uk": {
    "makiRoll": "РОЛИ МАКІ",
    "futoMakiRoll": "РОЛИ ФУТОМАКІ",
    "originalRolls": "ОРИГІНАЛЬНІ РОЛИ",
    "californiaRolls": "РОЛИ КАЛІФОРНІЯ",
    "philiRolls": "РОЛИ ФІЛАДЕЛЬФІЯ",
    "drakonRolls": "РОЛИ ДРАКОНИ",
    "order": "Замовити"
  },
  "en": {
   "makiRoll": "Maki Rolls",
   "futoMakiRoll": "FUTOMAKI Rolls",
   "originalRolls": "ORIGINAL ROLls",
   "californiaRolls": "CALIFORNIA ROLLS",
   "philiRolls": "PHILADELPHIA ROLLS",
    "drakonRolls": "DRAGONS ROLLs",
    "order": "Order"
  },
  "ru": {
    "makiRoll": "РОЛЛЫ МАКИ",
    "futoMakiRoll": "РОЛЛЫ Футомаки",
    "originalRolls": "ОРИГИНАЛЬНЫЕ РОЛЛЫ",
    "californiaRolls": "Роллы Калифорния",
    "philiRolls": "РОЛЛЫ ФИЛАДЕЛЬФИЯ",
    "drakonRolls": "Рулонные драконы",
    "order": "Заказать"
  }
}
</i18n>

<template>
  <div
    id="theSushi"
    class="container "
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
              <h2 class="text-center m-auto d-inline-block">
                {{ $t('makiRoll') }}
              </h2>
              <b-img-lazy
                src="~/assets/img/barbarescoSushiIcon.svg"
                alt="icon"
                class="m-auto d-none d-sm-block"
              />
            </div>
          </div>
        </div>

        <div class="col-sm-9">
          <productCard :products="extractedProductsMakiRolls" />
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
              <h2 class="text-center m-auto d-inline-block">
                {{ $t('futoMakiRoll') }}
              </h2>
              <b-img-lazy
                src="~/assets/img/barbarescoSushiIcon.svg"
                alt="icon"
                class="m-auto d-none d-sm-block"
              />
            </div>
          </div>
        </div>
        <div class="col-sm-9">
          <productCard :products="extractedProductsPhotoMakiRolls" />
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
              <h2 class="text-center m-auto d-inline-block">
                {{ $t('originalRolls') }}
              </h2>
              <b-img-lazy
                src="~/assets/img/barbarescoSushiIcon.svg"
                alt="icon"
                class="m-auto d-none d-sm-block"
              />
            </div>
          </div>
        </div>

        <div class="col-sm-9">
          <productCard :products="extractedProductsOriginalRoll" />
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
              <h2 class="text-center m-auto d-inline-block">
                {{ $t('californiaRolls') }}
              </h2>
              <b-img-lazy
                src="~/assets/img/barbarescoSushiIcon.svg"
                alt="icon"
                class="m-auto d-none d-sm-block"
              />
            </div>
          </div>
        </div>

        <div class="col-sm-9">
          <productCard :products="extractedProductsCaliforniaRoll" />
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
              <h2 class="text-center m-auto d-inline-block">
                {{ $t('philiRolls') }}
              </h2>
              <b-img-lazy
                src="~/assets/img/barbarescoSushiIcon.svg"
                alt="icon"
                class="m-auto d-none d-sm-block"
              />
            </div>
          </div>
        </div>

        <div class="col-sm-9">
          <productCard :products="extractedProductsPhiladelphiaRoll" />
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
              <h2 class="text-center m-auto d-inline-block">
                {{ $t('drakonRolls') }}
              </h2>
              <b-img-lazy
                src="~/assets/img/barbarescoSushiIcon.svg"
                alt="icon"
                class="m-auto d-none d-sm-block"
              />
            </div>
          </div>
        </div>

        <div class="col-sm-9">
          <productCard :products="extractedProductsDrakoniRoll" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import barbarescoCollection from '~/gql/barbaresco'
import productCard from '~/components/Barbaresco/TheProductsCardCategories'

export default {
  name: 'TheSushi',

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
    extractedProductsMakiRolls () {
      return this.$apolloData.data.barbarescoCollection.filter(el => el.category === 'barbaresco-makiRoll')
    },
    extractedProductsPhotoMakiRolls () {
      return this.$apolloData.data.barbarescoCollection.filter(el => el.category === 'barbaresco-futoMakiRoll')
    },

    extractedProductsOriginalRoll () {
      return this.$apolloData.data.barbarescoCollection.filter(el => el.category === 'barbaresco-originalRoll')
    },

    extractedProductsCaliforniaRoll () {
      return this.$apolloData.data.barbarescoCollection.filter(el => el.category === 'barbaresco-californiaRoll')
    },

    extractedProductsPhiladelphiaRoll () {
      return this.$apolloData.data.barbarescoCollection.filter(el => el.category === 'barbaresco-PhiladelphiaRoll')
    },

    extractedProductsDrakoniRoll () {
      return this.$apolloData.data.barbarescoCollection.filter(el => el.category === 'barbaresco-drakoniRoll')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/productCardsWithCategories.scss";
</style>
