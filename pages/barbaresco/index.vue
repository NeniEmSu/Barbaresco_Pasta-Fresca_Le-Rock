<i18n>
{
  "uk": {
    "title": "Меню",
    "description": "Затишна атмосфера, приємна музика, смачна кухня та привітний персонал - все це Ви знайдете у Нас"

  },
  "en": {
   "title": "Menu",
   "description": "Cozy atmosphere, nice music, delicious cuisine and friendly staff - all of which you will find in Us"

  },
  "ru": {
    "title": "Меню",
    "description": "Уютная атмосфера, приятная музыка, вкусная кухня и приветливый персонал - все это Вы найдете у Нас"
  }
}
</i18n>

<template>
  <div id="barbaresco">

    <TheImageNavigation />

    <TheImagedProductNav
      v-on:changedView="updateView($event)"
      :currentProductsDisplayed="currentProductsDisplayed"
    />

    <vue-page-transition name="fade">

      <ThePizza v-if="currentProductsDisplayed === 1" />

      <TheBugers v-if="currentProductsDisplayed === 2" />

      <TheSushi v-if="currentProductsDisplayed === 3" />

      <TheMlinty v-if="currentProductsDisplayed === 4" />

      <TheDesert v-if="currentProductsDisplayed === 5" />

      <TheSalad v-if="currentProductsDisplayed === 6" />

      <TheFirstCourse v-if="currentProductsDisplayed === 7" />

      <TheHits v-if="currentProductsDisplayed === 8" />

      <TheDrinks v-if="currentProductsDisplayed === 9" />

      <TheAlcohol v-if="currentProductsDisplayed === 10" />

    </vue-page-transition>

    <TheBottomCarousel />

    <TheMapComponent />

  </div>
</template>

<script>

import TheImageNavigation from '~/components/TheImageNavigation'
import TheImagedProductNav from '~/components/TheImagedProductNav'
import TheMapComponent from '~/components/TheMapComponent'
import TheBugers from '~/components/BarbarescoProducts/TheBugers'
import ThePizza from '~/components/BarbarescoProducts/ThePizza'
import TheSushi from '~/components/BarbarescoProducts/TheSushi'
import TheDrinks from '~/components/BarbarescoProducts/TheDrinks'
import TheMlinty from '~/components/BarbarescoProducts/TheMlinty'
import TheDesert from '~/components/BarbarescoProducts/TheDesert'
import TheSalad from '~/components/BarbarescoProducts/TheSalad'
import TheFirstCourse from '~/components/BarbarescoProducts/TheFirstCourse'
import TheHits from '~/components/BarbarescoProducts/TheHits'
import TheAlcohol from '~/components/BarbarescoProducts/TheAlcohol'
import TheBottomCarousel from '~/components/TheBottomCarousel'

export default {
  name: 'barbaresco',
  layout: 'barbaresco',
  components: {
    TheImageNavigation,
    TheImagedProductNav,
    TheMapComponent,
    TheBugers,
    ThePizza,
    TheSushi,
    TheMlinty,
    TheDesert,
    TheSalad,
    TheFirstCourse,
    TheHits,
    TheDrinks,
    TheAlcohol,
    TheBottomCarousel
  },

  meta: {
    animation: "overlay-down-full"
  },
  head () {
    return {
      title: ("Barbaresco - " + this.$t('title')).slice(
        0,
        60
      ),
      meta: [
        {
          hid: "description",
          name: "description",
          content: ("Barbaresco -" + this.$t('description')).slice(
            0,
            320
          )
        }
      ]
    }
  },

  data () {

    return {
      currentProductsDisplayed: 1,
    }
  },

  methods: {
    updateView (updatedView) {
      this.currentProductsDisplayed = updatedView
    }
  }
}
</script>

<style lang="scss" scoped>
#barbaresco {
  background: url("~assets/img/textureBeton.jpg") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>
