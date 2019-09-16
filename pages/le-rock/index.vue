<i18n>
{
  "uk": {
    "name": "Ле Рок",
    "title": "Меню",
    "tooltip": "Передзвонимо за 1 хв.",
    "description": "Компанія друзів, смачне меню і відмінна атмосфера - тільки в Le Rock!"

  },
  "en": {
    "name": "Le Rock",
   "title": "Menu",
   "tooltip": "Call back in 1 minute",
   "description": "Company of friends, delicious menu and great atmosphere - only in Le Rock!"

  },
  "ru": {
    "name": "Ле Рок",
    "title": "Меню",
    "tooltip": "Перезвоним за 1 мин.",
    "description": "Компания друзей, вкусное меню и отличная атмосфера - только в Le Rock!"
  }
}
</i18n>

<template>
  <div id="le-rock">

    <TheImageNavigation />

    <TheImagedProductNav
      v-on:changedView="updateView($event)"
      :currentProductsDisplayed="currentProductsDisplayed"
    />

    <!-- <b-img-lazy
      class="feedBack d-none d-md-block"
      id="feedBack"
      src="~/assets/img/feedBack.png"
      alt="feedback Icon"
    >

    </b-img-lazy>
     <b-tooltip
      target="feedBack"
      placement="topleft"
      variant="light"
    >
      <strong>
        <h6> {{$t('tooltip')}}</h6>
      </strong>
    </b-tooltip> -->

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

      <TheMainMeal v-if="currentProductsDisplayed === 11" />

    </vue-page-transition>

    <TheBottomCarousel class="elaboraSpacing" />

    <TheMapComponent />

  </div>
</template>

<script>

import TheImageNavigation from '~/components/TheImageNavigationLeRock'
import TheImagedProductNav from '~/components/TheImagedProductNavLeRock'
import TheMapComponent from '~/components/TheMapComponent'
import TheBugers from '~/components/BarbarescoProducts/TheBugersLeRock'
import ThePizza from '~/components/BarbarescoProducts/ThePizza'
import TheSushi from '~/components/BarbarescoProducts/TheSushi'
import TheDrinks from '~/components/BarbarescoProducts/TheDrinks'
import TheMlinty from '~/components/BarbarescoProducts/TheMlinty'
import TheDesert from '~/components/BarbarescoProducts/TheDesert'
import TheSalad from '~/components/BarbarescoProducts/TheSalad'
import TheFirstCourse from '~/components/BarbarescoProducts/TheFirstCourse'
import TheHits from '~/components/BarbarescoProducts/TheHits'
import TheAlcohol from '~/components/BarbarescoProducts/TheAlcohol'
import TheMainMeal from '~/components/BarbarescoProducts/TheMainMeal'
import TheBottomCarousel from '~/components/TheBottomCarouselOwl'

export default {
  name: 'le-rock',
  layout: 'le-rock',
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
    TheMainMeal,
    TheBottomCarousel
  },

  meta: {
    animation: "overlay-down-full"
  },
  head () {
    return {
      title: (this.$t('name') + " - " + this.$t('title')).slice(
        0,
        60
      ),
      meta: [
        {
          hid: "description",
          name: "description",
          content: (this.$t('name') + " - " + this.$t('description')).slice(
            0,
            320
          )
        }
      ]
    }
  },

  data () {

    return {
      currentProductsDisplayed: //Math.floor((Math.random() * 10) + 1)
        2,
      loading: false,

    }
  },

  methods: {
    updateView (updatedView) {
      this.currentProductsDisplayed = updatedView
    }

  },

  created (append = false) {
    this.loading = true;
    this.$store.dispatch("fetchProducts").then(() => (this.loading = false));
    this.$bvToast.toast(`${this.$store.getters.toast.text}`, {
      title: "Увага!",
      autoHideDelay: 5000,
      toaster: "b-toaster-bottom-right",
      appendToast: append
    })
  }

}
</script>

<style lang="scss" scoped>
#le-rock {
  background: url("~assets/img/le-rock-bg.jpg") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  position: relative;
  background-color: $headingsFontColor;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background-image: linear-gradient(to bottom right, #000000, #000000);
    opacity: 0.4;
  }
}

.feedBack {
  border: none;
  border-radius: 50%;
  background: none;
  position: absolute;
  bottom: 23.5%;
  right: 50px;
  cursor: pointer;
}

.elaboraSpacing {
  margin-top: 190px;
}
</style>
